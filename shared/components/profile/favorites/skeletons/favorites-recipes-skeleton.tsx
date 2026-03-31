import { Card, CardContent, Skeleton } from '@/shared/components/ui'

export const FavoritesRecipesSkeleton = () => {
	return (
		<section className='space-y-4'>
			<div className='flex flex-col gap-4 md:flex-row md:items-center md:gap-4'>
				{Array.from({ length: 4 }).map((_, index) => (
					<Card key={index} className='w-full'>
						<CardContent>
							<Skeleton className='mb-2 h-50 w-full' />
							<Skeleton className='mb-2 h-4 w-40' />
							<Skeleton className='h-4 w-20' />
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	)
}
