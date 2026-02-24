import type { Metadata } from 'next'

import { AuthWrapper } from '@/shared/components/auth'

export const metadata: Metadata = {
	title: 'Верификация почты | Flavor Fit',
	description:
		'Подтвердите свою почту для завершения регистрации на Flavor Fit.'
}

export default function VerifyPage() {
	return <AuthWrapper type='verify' />
}
