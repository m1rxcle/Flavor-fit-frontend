import Image from 'next/image'

import { cn } from '@/shared/lib/utils'

interface Props {
	email: string
	imageUrl: string
	className?: string
}

export const RecipeAuthorBlock: React.FC<Props> = ({
	imageUrl,
	email,
	className
}) => {
	return (
		<div className={cn('flex items-center gap-2', className)}>
			<Image
				src={imageUrl}
				alt='profile img'
				width={25}
				height={25}
				priority
				className='rounded-full'
			/>
			<p className='text-muted-foreground line-clamp-2 truncate text-sm'>
				{email}
			</p>
		</div>
	)
}
