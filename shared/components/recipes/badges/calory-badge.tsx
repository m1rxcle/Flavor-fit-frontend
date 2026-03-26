import { Flame } from 'lucide-react'
import React from 'react'

import { cn } from '@/shared/lib/utils'

import { Badge } from '../../ui'

interface Props {
	calories: number
	className?: string
}

export const CaloryBadge: React.FC<Props> = ({ calories, className }) => {
	return (
		<Badge
			variant='secondary'
			className={cn(
				'flex items-center rounded-md text-xs font-semibold',
				className
			)}
		>
			<Flame />
			{calories}ккал
		</Badge>
	)
}
