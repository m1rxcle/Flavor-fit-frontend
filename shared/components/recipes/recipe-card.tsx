import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import type { GetAllRecipesQuery } from '@/graphql/generated/graphql'

import { Card, CardContent, CardHeader } from '../ui/card'

import {
	CaloryBadge,
	CookingTimeBadge,
	DifficultyBadge,
	LikeBadge,
	ViewBadge
} from './badges'

interface Props {
	recipe: GetAllRecipesQuery['getAllRecipes'][number]
}

export const RecipeCard: React.FC<Props> = ({ recipe }) => {
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
			href={`/recipes/slug?s=${encodeURIComponent(slug)}`}
			className='inline-block cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 active:scale-98'
		>
			<Card className='hover:bg-primary-foreground/60 group flex w-75 flex-col rounded-4xl border'>
				<CardHeader>
					<Image
						src='/images/auth/desktop/helper.jpg'
						alt='pic'
						width={500}
						height={200}
						className='h-[150px] w-125 rounded-4xl object-cover group-hover:opacity-80'
					/>
				</CardHeader>
				<CardContent className='flex flex-1 flex-col space-y-2'>
					<h1 className='text-xl font-bold'>{title}</h1>
					<p className='text-muted-foreground text-md line-clamp-2 min-h-10'>
						{description}
					</p>

					<div className='mb-4 flex items-center gap-2'>
						<CookingTimeBadge cookingTime={cookingTime} />
						<CaloryBadge calories={calories} />
					</div>
					<div className='flex items-center justify-between gap-2'>
						<DifficultyBadge difficulty={difficulty} />
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
