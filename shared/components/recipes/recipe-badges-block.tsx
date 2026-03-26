import React from 'react'

import type { Difficulty } from '@/graphql/generated/graphql'

import { cn } from '@/shared/lib/utils'

import { CaloryBadge, CookingTimeBadge, DifficultyBadge } from './badges'

interface Props {
	calories?: number
	cookingTime?: number
	difficulty?: Difficulty
	className?: string
}

export const RecipeBadgesBlock: React.FC<Props> = ({
	calories,
	cookingTime,
	difficulty,
	className
}) => {
	return (
		<div className={cn('flex items-center gap-2', className)}>
			{calories && <CaloryBadge calories={calories} />}
			{cookingTime && <CookingTimeBadge cookingTime={cookingTime} />}
			{difficulty && <DifficultyBadge difficulty={difficulty} />}
		</div>
	)
}
