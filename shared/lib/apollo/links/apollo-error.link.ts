import { Observable } from '@apollo/client'
import { CombinedGraphQLErrors } from '@apollo/client/errors'
import { ErrorLink } from '@apollo/client/link/error'

import { RefreshTokensDocument } from '@/graphql/generated/graphql'

import { getApolloClient } from '../apollo-client'

import { useAuthStore } from '@/shared/store/auth.store'

let isRefreshing = false
let pendingRequests: (() => void)[] = []

const resolvePendingRequests = () => {
	pendingRequests.forEach(cb => cb())
	pendingRequests = []
}

export const errorLink = new ErrorLink(({ error, operation, forward }) => {
	if (!CombinedGraphQLErrors.is(error)) return

	const isUnauthenticated = error.errors.some(
		err => err.extensions?.['code'] === 'UNAUTHENTICATED'
	)

	if (!isUnauthenticated) return

	return new Observable(observer => {
		if (!isRefreshing) {
			isRefreshing = true

			getApolloClient()
				.mutate({ mutation: RefreshTokensDocument })
				.then(({ data }) => {
					const newAccessToken = data?.refresh?.accessToken

					if (!newAccessToken) throw new Error('No access token')

					useAuthStore.getState().setAccessToken(newAccessToken)

					isRefreshing = false
					resolvePendingRequests()

					forward(operation).subscribe(observer)
				})
				.catch(err => {
					isRefreshing = false
					useAuthStore.getState().setAccessToken(null)
					observer.error(err)
					window.location.href = '/auth/login'
				})
		} else {
			pendingRequests.push(() => {
				const token = useAuthStore.getState().accessToken
				operation.setContext(({ headers = {} }) => ({
					headers: {
						...headers,
						authorization: `Bearer ${token}`
					}
				}))
				forward(operation).subscribe(observer)
			})
		}
	})
})
