import Link from 'next/link'
import React from 'react'

import type { GetAllRecipesQuery } from '@/graphql/generated/graphql'

import { cn } from '@/shared/lib/utils'

import { Card, CardContent, CardHeader } from '../../ui'
import { LikeBadge, ViewBadge } from '../badges'

import { RecipeBadgesBlock } from './recipe-badges-block'
import { RecipeDescriptionBlock } from './recipe-description-block'
import { RecipeImage } from './recipe-image'

interface Props {
	recipe: GetAllRecipesQuery['getAllRecipes'][number]
	className?: string
}

export const RecipeCard: React.FC<Props> = ({ recipe, className }) => {
	const {
		calories,
		cookingTime,
		description,
		difficulty,
		imageUrl,
		likes,
		views,
		title,
		slug
	} = recipe

	return (
		<Link
			href={`/recipes/${slug}`}
			prefetch
			className='inline-block cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 active:scale-98 md:hover:rotate-2'
		>
			<Card
				className={cn(
					'hover:bg-primary-foreground flex w-75 flex-col rounded-4xl border',
					className
				)}
			>
				<CardHeader>
					<RecipeImage
						className='h-30 min-h-30 md:h-30 md:min-h-30'
						imageUrl={imageUrl}
					/>
				</CardHeader>
				<CardContent className='flex flex-1 flex-col space-y-2'>
					<h1 className='text-xl font-bold'>{title}</h1>

					<RecipeDescriptionBlock
						description={description}
						className='min-h-10'
					/>

					<div className='mb-4 flex items-center gap-2'>
						<RecipeBadgesBlock
							calories={calories}
							cookingTime={cookingTime}
						/>
					</div>
					<div className='flex items-center justify-between gap-2'>
						<RecipeBadgesBlock difficulty={difficulty} />
						<div className='flex items-center gap-2'>
							<LikeBadge likes={likes?.length} />
							<ViewBadge views={views?.length} />
						</div>
					</div>
				</CardContent>
			</Card>
		</Link>
	)
}
