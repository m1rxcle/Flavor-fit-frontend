import Image from 'next/image'
import React from 'react'

import { cn } from '@/shared/lib/utils'

interface Props {
	imageUrl?: string
	className?: string
}

//TODO: add recipe image

export const RecipeImage: React.FC<Props> = ({ imageUrl, className }) => {
	return (
		<div
			className={cn(
				'relative h-50 w-full overflow-hidden rounded-4xl md:h-auto md:min-h-50',
				className
			)}
		>
			<Image
				src={'/images/auth/desktop/helper.jpg'}
				alt={'at'}
				fill
				sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
				className='object-cover'
			/>
		</div>
	)
}
