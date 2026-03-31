import { Clock } from 'lucide-react'
import React from 'react'

import { cn } from '@/shared/lib/utils'

import { Badge } from '../../ui'

interface Props {
	cookingTime: number
	className?: string
}

export const CookingTimeBadge: React.FC<Props> = ({
	cookingTime,
	className
}) => {
	return (
		<Badge
			variant='secondary'
			className={cn(
				'flex items-center rounded-md text-xs font-semibold',
				className
			)}
		>
			<Clock className='text-accent' />
			{cookingTime}мин
		</Badge>
	)
}
