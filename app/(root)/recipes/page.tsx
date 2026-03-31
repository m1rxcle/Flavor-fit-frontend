import type { Metadata } from 'next'

import { Recipes } from '@/shared/components/recipes/recipes'

export const metadata: Metadata = {
	title: 'Рецепты | Flavor Fit',
	description: 'Рецепты вкусных блюд и закусок Flavor Fit'
}

export default function RecipesPage() {
	return <Recipes />
}
