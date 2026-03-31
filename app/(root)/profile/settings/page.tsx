import type { Metadata } from 'next'

import { SettingsPage } from '@/shared/components/profile/settings/settings'

export const metadata: Metadata = {
	title: 'Настройки | Flavor Fit',
	description: 'Настройки пользователя'
}

export default function Page() {
	return <SettingsPage />
}
