'use client'

import { useQuery } from '@apollo/client/react'

import { GetLikedRecipesDocument } from '@/graphql/generated/graphql'

import { RecipeCard } from '../../recipes/recipe/recipe-card'

import { EmptyFavoritesRecipes } from './empty-favorites-recipes'
import { FavoritesRecipesSkeleton } from './skeletons/favorites-recipes-skeleton'

export const FavoritesRecipesList = () => {
	const { data, loading } = useQuery(GetLikedRecipesDocument, {
		variables: {
			take: 10
		}
	})

	if (data?.getLikedRecipes.length === 0 && !loading) {
		return <EmptyFavoritesRecipes />
	}

	if (loading) return <FavoritesRecipesSkeleton />

	return (
		<section className='flex flex-wrap gap-4'>
			{data?.getLikedRecipes.map(recipe => (
				<RecipeCard
					className='w-full md:w-76'
					key={recipe.id}
					recipe={recipe}
				/>
			))}
		</section>
	)
}
