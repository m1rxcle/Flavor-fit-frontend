import Image from 'next/image'
import React from 'react'

import type { GetBySlugRecipeQuery } from '@/graphql/generated/graphql'

import { cn } from '@/shared/lib/utils'

import { Card, CardContent, CardHeader } from '../ui'

interface Props {
	recipeIngredients: GetBySlugRecipeQuery['getRecipeBySlug']['recipeIngredients']

	className?: string
}

export const RecipeIngredientsBlock: React.FC<Props> = ({
	recipeIngredients,
	className
}) => {
	return (
		<div className={cn('flex items-center gap-2', className)}>
			{recipeIngredients.map(ingredients => (
				<Card key={ingredients.id}>
					<CardHeader>
						{/* <Image
							src={ingredients.ingredient.iconUrl}
							alt='icon'
							width={20}
							height={20}
						/> */}
					</CardHeader>
					<CardContent>
						<p className='text-muted-foreground text-sm'>
							{ingredients.ingredient.title}
						</p>
						<span className='text-muted-foreground text-xs'>
							{ingredients.quantity} {ingredients.unit}
						</span>
					</CardContent>
				</Card>
			))}
		</div>
	)
}
