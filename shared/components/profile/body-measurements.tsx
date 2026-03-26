import Image from 'next/image'

import type { GetFullProfileAtUserQuery } from '@/graphql/generated/graphql'

import { Card, CardContent, CardHeader } from '../ui'

import { BodyMeasurementsForm } from './body-measurements-form'
import { BodyMeasurementsSkeleton } from './skeletons'

interface Props {
	updateMeasurementsData: GetFullProfileAtUserQuery['getMe'] | undefined
	isUpdateProfileLoading: boolean
	isGetProfileLoading: boolean
}

export const BodyMeasurements = ({
	updateMeasurementsData,
	isUpdateProfileLoading,
	isGetProfileLoading
}: Props) => {
	if (isGetProfileLoading) {
		return <BodyMeasurementsSkeleton />
	}
	const gender = updateMeasurementsData?.profile?.gender
	const imgSrc =
		gender === 'MALE'
			? '/images/profile/body/man-1.png'
			: '/images/profile/body/woman-1.png'

	return (
		<Card className='w-full'>
			<CardHeader>
				<h2 className='text-xl font-bold'>Физические данные</h2>
			</CardHeader>
			<CardContent className='flex gap-4 space-y-4'>
				<Image
					src={imgSrc || ''}
					alt='pic'
					width={120}
					height={100}
					fetchPriority='high'
					className='pointer-events-none hidden select-none 2xl:inline'
				/>
				<BodyMeasurementsForm
					isUpdateProfileLoading={isUpdateProfileLoading}
				/>
			</CardContent>
		</Card>
	)
}
