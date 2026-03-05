import type { Metadata } from 'next'

import { AuthWrapper } from '@/shared/components/auth'

export const metadata: Metadata = {
	title: 'Двухфакторная аутентификация | Flavor Fit',
	description: 'Странница авторизации и регистрации новых пользователей.'
}

export default function TwoFactorPage() {
	return <AuthWrapper type='two-factor' />
}
