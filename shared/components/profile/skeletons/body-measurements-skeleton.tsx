import { Card, CardContent, Skeleton } from '../../ui'

export const BodyMeasurementsSkeleton = () => {
	return (
		<Card className='w-full'>
			<CardContent className='space-y-6'>
				<Skeleton className='h-4 w-40 rounded-full' /> {/* Growth */}
				<Skeleton className='h-10 w-full rounded-full' /> {/* Growth */}
				<div className='mb-10 space-y-6'>
					<div className='flex gap-4'>
						<Skeleton className='h-8 w-1/2 rounded-full' />{' '}
						{/* Current weight */}
						<Skeleton className='h-8 w-1/2 rounded-full' />{' '}
						{/* Desired weight */}
					</div>
					<div className='flex gap-4'>
						<Skeleton className='h-8 w-1/2 rounded-full' />{' '}
						{/* Waist circumference */}
						<Skeleton className='h-8 w-1/2 rounded-full' />{' '}
						{/* Chest weight */}
					</div>
					<div className='flex gap-4'>
						<Skeleton className='h-8 w-1/2 rounded-full' />{' '}
						{/* Thigh circumference */}
						<Skeleton className='h-8 w-1/2 rounded-full' />{' '}
						{/* Arm circumference */}
					</div>
					<div className='flex gap-4'>
						<Skeleton className='h-8 w-1/2 rounded-full' />{' '}
						{/* Nutritional goals */}
						<Skeleton className='h-8 w-1/2 rounded-full' />{' '}
						{/* Activity level */}
					</div>
				</div>
				<Skeleton className='h-10 w-full rounded-full' /> {/* Growth */}
				<Skeleton className='h-10 w-full rounded-full' /> {/* Growth */}
			</CardContent>
		</Card>
	)
}
