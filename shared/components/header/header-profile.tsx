'use client'

import { useQuery } from '@apollo/client/react'
import { useRouter } from 'next/navigation'

import { GetMeDocument } from '@/graphql/generated/graphql'

import { AvatarUpload } from '../profile/avatar-upload'

import { ProfileSkeleton } from './skeletons/profile-skeleton'

export const HeaderProfile = () => {
	const router = useRouter()

	const { data: user, loading } = useQuery(GetMeDocument)

	const takeFirstName = user?.getMe.fullName.split(' ')[0]

	if (loading) {
		return <ProfileSkeleton />
	}

	return (
		<div
			className='flex cursor-pointer items-center gap-2'
			onClick={() => router.replace('/profile')}
		>
			<div className='rounded-full'>
				<AvatarUpload
					value={user?.getMe.profile?.imageUrl}
					className='h-12 w-12'
				/>
			</div>
			<div className='hidden leading-5 lg:block'>
				<h2 className='text-2xl font-bold'>{takeFirstName}</h2>
				<h3 className='line-clamp-1 truncate'>{user?.getMe.email}</h3>
			</div>
		</div>
	)
}
