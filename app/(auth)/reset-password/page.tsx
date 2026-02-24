import type { Metadata } from 'next'

import { AuthWrapper } from '@/shared/components/auth'

export const metadata: Metadata = {
	title: 'Сброс пароля | Flavor Fit',
	description: 'Странница авторизации и регистрации новых пользователей.'
}

export default function ResetPasswordPage() {
	return <AuthWrapper type='reset' />
}
