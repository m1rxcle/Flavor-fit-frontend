import { Eye, Flame, Heart } from 'lucide-react'
import React from 'react'

import { cn } from '@/shared/lib/utils'

interface Props {
	views: number | undefined
	className?: string
}

export const ViewBadge: React.FC<Props> = ({ views, className }) => {
	return (
		<div className={cn('flex items-center gap-1 rounded-md', className)}>
			<Eye className='text-muted-foreground size-4' />
			<span className='text-xs font-semibold'>{views}</span>
		</div>
	)
}
