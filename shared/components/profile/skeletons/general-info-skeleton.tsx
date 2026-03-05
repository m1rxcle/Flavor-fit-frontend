import { Card, CardContent, Skeleton } from '../../ui'

export const GeneralInfoSkeleton = () => {
	return (
		<Card className='w-full'>
			<CardContent className='space-y-6'>
				<div className='flex-1 space-y-2'>
					<Skeleton className='h-4 w-1/2 rounded-full' />
				</div>
				<div className='flex items-center justify-center gap-2 md:justify-start'>
					<Skeleton className='h-12 w-12 rounded-full' />
					<div className='flex-1 space-y-2'>
						<Skeleton className='h-4 w-1/2 rounded-full' />
						<Skeleton className='h-4 w-1/3 rounded-full' />
					</div>
				</div>
				<Skeleton className='h-10 w-full rounded-full' />
				<div className='flex gap-4'>
					<Skeleton className='h-8 w-1/2 rounded-full' />
					<Skeleton className='h-8 w-1/2 rounded-full' />
				</div>
				<Skeleton className='h-24 w-full rounded-2xl' />
				<div className='flex flex-col gap-2'>
					<Skeleton className='h-8 w-full rounded-full' />
					<Skeleton className='h-8 w-full rounded-full' />
				</div>
				<Skeleton className='h-4 w-40 rounded-full' />
			</CardContent>
		</Card>
	)
}
