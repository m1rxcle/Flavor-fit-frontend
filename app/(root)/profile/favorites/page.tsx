import type { Metadata } from 'next'

import { FavoritesPage } from '@/shared/components/profile/favorites/favorites-page'

export const metadata: Metadata = {
	title: 'Избранные рецепты | Flavor Fit',
	description: 'Избранные рецепты пользователя'
}

export default function Page() {
	return <FavoritesPage />
}
