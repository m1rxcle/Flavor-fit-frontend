import { Skeleton } from '../../ui'

export const ProfileSkeleton = () => {
	return (
		<div className='flex cursor-pointer items-center gap-2'>
			<Skeleton className='rounded-full p-6' />

			<div className='hidden space-y-2 lg:block'>
				<Skeleton className='h-4 w-25 text-2xl font-bold' />
				<Skeleton className='line-clamp-1 h-4 w-50' />
			</div>
		</div>
	)
}
