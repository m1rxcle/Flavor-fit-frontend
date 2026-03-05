'use client'

import { useMutation } from '@apollo/client/react'
import { useEffect } from 'react'

import { RefreshTokensDocument } from '@/graphql/generated/graphql'

import { useAuthStore } from '../store/auth.store'

export const AuthInit = ({ children }: { children: React.ReactNode }) => {
	const [refresh] = useMutation(RefreshTokensDocument)
	const { setAccessToken, setUser } = useAuthStore()

	useEffect(() => {
		refresh()
			.then(({ data }) => {
				const token = data?.refresh.accessToken
				const userData = data?.refresh.user

				if (!token || !userData) {
					setAccessToken(null)
					setUser(null)
					return
				}

				setAccessToken(token)
				setUser(userData)
			})
			.catch(() => {
				setAccessToken(null)
				setUser(null)
			})
	}, [])

	return <>{children}</>
}
