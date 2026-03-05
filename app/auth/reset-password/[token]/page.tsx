import type { Metadata } from 'next'

import { AuthWrapper } from '@/shared/components/auth'

export const metadata: Metadata = {
	title: 'Новый пароль | Flavor Fit',
	description: 'Странница авторизации и регистрации новых пользователей.'
}

export default function NewPasswordPage() {
	return <AuthWrapper type='new-password' />
}
