'use client'

import { useQuery } from '@apollo/client/react'

import { GetBySlugRecipeDocument } from '@/graphql/generated/graphql'

import { CommentsInRecipe } from '../comments/comments-in-recipe'

import { RecipeWithRecipeStep } from './recipe-with-recipe-step'
import { RecipeSkeleton } from './skeletons/recipe-skeleton'

interface Props {
	slug: string
}

export const Recipe = ({ slug }: Props) => {
	const { data: recipe, loading: recipeLoading } = useQuery(
		GetBySlugRecipeDocument,
		{
			variables: { slug }
		}
	)

	if (!recipe?.getRecipeBySlug || recipeLoading) return <RecipeSkeleton />

	return (
		<section className='flex h-full flex-col gap-6 px-6 py-6 xl:flex-row'>
			<div className='flex-1'>
				<RecipeWithRecipeStep recipe={recipe.getRecipeBySlug} />
			</div>
			<CommentsInRecipe
				recipeId={recipe.getRecipeBySlug.id}
				totalLikes={recipe.getRecipeBySlug.likes?.length}
				totalViews={recipe.getRecipeBySlug.views?.length}
			/>
		</section>
	)
}
