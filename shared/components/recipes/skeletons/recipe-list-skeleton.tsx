import { Skeleton } from '../../ui'

export const RecipeListSkeleton = () => {
	return (
		<section className='mt-10'>
			<div className='space-y-5'>
				<Skeleton className='mb-4 h-8 w-50' />

				<div className='flex w-full flex-col gap-4 md:flex-row md:items-center md:gap-4'>
					{Array.from({ length: 3 }).map((_, index) => (
						<div key={index}>
							<Skeleton className='mb-2 h-50 w-80' />
							<Skeleton className='mb-2 h-4 w-40' />
							<Skeleton className='h-4 w-20' />
						</div>
					))}
				</div>

				<Skeleton className='mb-4 h-8 w-50' />

				<div className='flex w-full flex-col gap-4 md:flex-row md:items-center md:gap-4'>
					{Array.from({ length: 3 }).map((_, index) => (
						<div key={index}>
							<Skeleton className='mb-2 h-50 w-80' />
							<Skeleton className='mb-2 h-4 w-40' />
							<Skeleton className='h-4 w-20' />
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
