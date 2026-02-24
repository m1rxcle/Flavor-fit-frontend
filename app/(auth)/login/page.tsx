import type { Metadata } from 'next'

import { AuthWrapper } from '@/shared/components/auth'

export const metadata: Metadata = {
	title: 'Авторизация | Flavor Fit',
	description: 'Странница авторизации и регистрации новых пользователей.'
}

export default function LoginPage() {
	return <AuthWrapper type='login' />
}
