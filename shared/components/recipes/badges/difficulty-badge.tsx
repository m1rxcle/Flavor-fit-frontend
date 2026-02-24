import { ChefHat } from 'lucide-react'
import React from 'react'

import { Difficulty } from '@/graphql/generated/graphql'

import { cn } from '@/shared/lib/utils'

interface Props {
	difficulty: Difficulty
	className?: string
}

export const DifficultyBadge: React.FC<Props> = ({ difficulty, className }) => {
	let difficultyMap = ''
	const starArray = []

	switch (difficulty) {
		case Difficulty.Hard:
			difficultyMap = 'Сложный'
			starArray.push(...Array(3).fill(<ChefHat className='size-4' />))
			break
		case Difficulty.Medium:
			difficultyMap = 'Средний'
			starArray.push(...Array(2).fill(<ChefHat className='size-4' />))

			break
		default:
			difficultyMap = 'Легкий'
			starArray.push(...Array(1).fill(<ChefHat className='size-4' />))
	}

	return (
		<div
			className={cn(
				`${
					difficulty === Difficulty.Hard
						? 'bg-orange-500/15 text-red-500'
						: difficulty === Difficulty.Medium
							? 'bg-yellow-500/15 text-yellow-500'
							: 'bg-green-500/15 text-green-500'
				} flex items-center rounded-md p-1`
			)}
		>
			{starArray.map((star, index) => (
				<span key={index}>{star}</span>
			))}
			<p className='mx-1 text-xs font-bold'>{difficultyMap}</p>
		</div>
	)
}
