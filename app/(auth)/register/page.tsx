import type { Metadata } from 'next'

import { AuthWrapper } from '@/shared/components/auth'

export const metadata: Metadata = {
	title: 'Регистрация | Flavor Fit',
	description: 'Странница авторизации и регистрации новых пользователей.'
}

export default function RegisterPage() {
	return <AuthWrapper type='register' />
}
