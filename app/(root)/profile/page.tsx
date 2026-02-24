import type { Metadata } from 'next'

import { Profile } from '@/shared/components/profile/profile'

export const metadata: Metadata = {
	title: 'Профиль | Flavor Fit',
	description: 'Профиль пользователя'
}

export default function Page() {
	return <Profile />
}
