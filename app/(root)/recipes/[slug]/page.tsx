import type { Metadata } from 'next'

import { Recipe } from '@/shared/components/recipes/recipe'

export const metadata: Metadata = {
	title: 'Рецепт | Flavor Fit',
	description: 'Рецепт вкусного блюда'
}

export default function RecipePage() {
	return <Recipe />
}
