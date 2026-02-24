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
			className={cn('flex items-center rounded-md', className)}
		>
			<Flame />
			<span className='text-xs font-semibold'>{calories}ккал</span>
		</Badge>
	)
}
