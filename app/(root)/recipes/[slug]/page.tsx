import type { Metadata } from 'next'

import { Recipe } from '@/shared/components/recipes/recipe'

export const generateMetadata = async ({
	params
}: {
	params: Promise<{ slug: string }>
}): Promise<Metadata> => {
	const { slug } = await params
	const decodedSlug = decodeURIComponent(slug)

	const prettySlug = decodedSlug
		.split('-')
		.map(word => word[0].toUpperCase() + word.slice(1))
		.join(' ')

	return {
		title: `Рецепт ${prettySlug} | Flavor Fit`,
		description: `Рецепт вкусного блюда ${prettySlug} Flavor Fit`
	}
}

export default async function RecipePage({
	params
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = await params
	const decodedSlug = decodeURIComponent(slug)

	return <Recipe slug={decodedSlug} />
}
