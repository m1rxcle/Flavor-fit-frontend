import { ApolloLink } from '@apollo/client'

import { useAuthStore } from '@/shared/store/auth.store'

export const authLink = new ApolloLink((operation, forward) => {
	const token = useAuthStore.getState().accessToken
	operation.setContext(({ headers = {} }) => ({
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : ''
		}
	}))
	return forward(operation)
})
