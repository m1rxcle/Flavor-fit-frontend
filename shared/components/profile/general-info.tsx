import type { GetFullProfileAtUserQuery } from '@/graphql/generated/graphql'

import { Card, CardContent, CardHeader } from '../ui'

import { ProfileGeneralInfoForm } from './profile-general-info-form'
import { GeneralInfoSkeleton } from './skeletons'

interface Props {
	updateProfileData: GetFullProfileAtUserQuery['getMe'] | undefined
	isUpdateLoading: boolean
	isGetProfileLoading: boolean
}

export const GeneralInfo = ({
	updateProfileData,
	isUpdateLoading,
	isGetProfileLoading
}: Props) => {
	if (isGetProfileLoading) {
		return <GeneralInfoSkeleton />
	}

	return (
		<Card className='w-full'>
			<CardHeader>
				<h2 className='text-xl font-bold'>Основная информация</h2>
			</CardHeader>
			<CardContent className='space-y-4'>
				<ProfileGeneralInfoForm
					profileData={updateProfileData}
					isUpdateLoading={isUpdateLoading}
				/>
			</CardContent>
		</Card>
	)
}
