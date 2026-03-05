import type { Metadata } from 'next'

import { ProfileInfo } from '@/shared/components/profile/profile'

export const metadata: Metadata = {
	title: 'Персональные данные | Flavor Fit',
	description: 'Персональные данные  пользователя'
}

export default function Page() {
	return <ProfileInfo />
}
