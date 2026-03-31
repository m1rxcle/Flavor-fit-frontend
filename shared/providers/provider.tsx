'use client'
import { ApolloProvider } from '@apollo/client/react'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { Toaster } from 'sonner'

import { getApolloClient } from '../lib/apollo'

import { AuthInit } from './auth-init'
import { ThemeProvider } from './theme-provider'

const apollo = getApolloClient()
export function Provider({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
			<NuqsAdapter>
				<ApolloProvider client={apollo}>
					<AuthInit>{children}</AuthInit>
					<Toaster
						position='top-center'
						richColors
						toastOptions={{
							style: {
								fontSize: '15px'
							}
						}}
						closeButton
					/>
				</ApolloProvider>
			</NuqsAdapter>
		</ThemeProvider>
	)
}
