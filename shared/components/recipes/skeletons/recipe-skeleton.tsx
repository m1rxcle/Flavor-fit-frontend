import { MessageCircleMore } from 'lucide-react'

import { Card, CardContent, Skeleton } from '../../ui'

export const RecipeSkeleton = () => {
	return (
		<section className='flex h-full flex-col gap-6 px-6 py-6 xl:flex-row'>
			<div className='flex-1'>
				<Card className='w-full xl:h-[calc(100dvh-9rem)]'>
					<CardContent className='flex flex-col gap-4'>
						<div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
							{/* Image skeleton */}
							<Skeleton className='h-64 w-full rounded-2xl md:h-112' />

							{/* Right block skeleton */}
							<div className='flex flex-col gap-4'>
								{/* Title */}
								<Skeleton className='h-8 w-3/4 rounded-md' />

								{/* Badges & Author */}
								<div className='flex items-center justify-between gap-5'>
									<Skeleton className='h-6 w-1/2 rounded-md' />
									<Skeleton className='h-10 w-10 rounded-full' />
								</div>

								{/* Description */}
								<Skeleton className='mt-2 h-6 w-1/2 rounded-md' />
								<Skeleton className='h-20 w-full rounded-md' />

								{/* Tags */}
								<div className='mt-2 flex gap-2'>
									<Skeleton className='h-6 w-16 rounded-md' />
									<Skeleton className='h-6 w-16 rounded-md' />
									<Skeleton className='h-6 w-16 rounded-md' />
								</div>

								{/* Nutrition Facts */}
								<div className='mt-4 flex gap-4'>
									<Skeleton className='h-16 w-16 rounded-md' />
									<Skeleton className='h-16 w-16 rounded-md' />
									<Skeleton className='h-16 w-16 rounded-md' />
									<Skeleton className='h-16 w-16 rounded-md' />
								</div>

								{/* Ingredients */}
								<div className='mt-4 flex flex-col gap-2'>
									<Skeleton className='h-6 w-1/3 rounded-md' />
									<Skeleton className='h-32 w-full rounded-md' />
								</div>
							</div>
						</div>

						{/* Recipe steps */}
						<div className='mt-4'>
							<Skeleton className='h-48 w-full rounded-md' />
						</div>
					</CardContent>
				</Card>
			</div>
			<Card className='relative flex flex-col xl:h-[calc(100dvh-9rem)]'>
				<CardContent className='flex min-h-0 flex-1 flex-col gap-4'>
					<div className='mb-4 flex flex-col items-center'>
						<div className='flex items-center gap-2'>
							<MessageCircleMore className='text-muted-foreground size-6' />
							<h1 className='text-primary text-xl font-bold'>
								Комментарии
							</h1>
						</div>
					</div>
					<div className='flex flex-col gap-4'>
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
				</CardContent>
			</Card>
		</section>
	)
}
