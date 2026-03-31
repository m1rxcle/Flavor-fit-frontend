import { Heart } from 'lucide-react'

import { Card, CardContent, CardHeader } from '../../ui'

import { FavoritesRecipesList } from './favorites-recipes-list'

export const FavoritesPage = () => {
	return (
		<Card>
			<CardHeader className='flex items-start gap-2'>
				<Heart className='text-muted-foreground' />
				<h2 className='text-xl font-bold'>Ваши избранные рецепты</h2>
			</CardHeader>
			<CardContent>
				<FavoritesRecipesList />
			</CardContent>
		</Card>
	)
}
