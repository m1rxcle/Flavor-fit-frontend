import { Heart } from 'lucide-react'
import React from 'react'

import { cn } from '@/shared/lib/utils'

interface Props {
	likes: number | undefined
	className?: string
}

export const LikeBadge: React.FC<Props> = ({ likes, className }) => {
	return (
		<div className={cn('flex items-center gap-1 rounded-md', className)}>
			<Heart className='text-muted-foreground size-4' />
			<span className='text-xs font-semibold'>
				{likes}
				{likes && likes > 1000 ? 'k' : ''}
			</span>
		</div>
	)
}
