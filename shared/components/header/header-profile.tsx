'use client'

import { User2Icon } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { useAuthStore } from '@/shared/store/auth.store'

export const HeaderProfile = () => {
	const router = useRouter()

	const { user } = useAuthStore()

	const takeFirstName = user?.fullName.split(' ')[0]

	return (
		<div
			className='flex cursor-pointer items-center gap-2'
			onClick={() => router.replace('/profile')}
		>
			<div className='rounded-full bg-black p-3'>
				<User2Icon className='text-secondary-foreground' />
			</div>
			<div className='hidden leading-5 lg:block'>
				<h2 className='text-2xl font-bold'>{takeFirstName}</h2>
				<h3 className='line-clamp-1 truncate'>{user?.email}</h3>
			</div>
		</div>
	)
}
