import { cn } from '@/shared/lib/utils'

import { Card, CardContent, Skeleton } from '../../ui'

export const CommentsSkeleton = () => {
	return (
		<div className={cn('flex flex-col gap-4')}>
			{Array.from({ length: 4 }).map((_, i) => (
				<Card key={i} className='w-70'>
					<CardContent>
						<div className='flex flex-col gap-2'>
							<div className='flex items-center justify-between gap-2'>
								<div className='flex items-center gap-2'>
									<Skeleton className='h-8 w-8 rounded-full' />
									<Skeleton className='h-4 w-30 rounded' />
								</div>
								<Skeleton className='h-4 w-4 rounded' />
							</div>
							<div className='mt-2 flex flex-col gap-2'>
								<Skeleton className='h-4 w-full rounded' />
								<Skeleton className='h-4 w-3/4 rounded' />
							</div>
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	)
}
