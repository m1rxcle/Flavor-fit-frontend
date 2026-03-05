'use client'

import { PROFILE_MENU } from '@/shared/constants/profile.constants'

import { ToggleTheme } from '../kit'
import { Card, CardContent } from '../ui'

import { LogoutButton } from './logout-button'
import { ProfileMenuItem } from './profile-menu-item'

export const ProfileMenu = () => {
	return (
		<>
			<aside className='hidden px-6 py-6 md:block'>
				<Card className='lg:h-full'>
					<CardContent className='flex h-full flex-col justify-between gap-4'>
						<div className='flex flex-col justify-between gap-4'>
							{PROFILE_MENU.map((item, index) => (
								<ProfileMenuItem key={index} item={item} />
							))}
						</div>
						<div className='flex items-center gap-2'>
							<LogoutButton className='flex-1' />
							<ToggleTheme />
						</div>
					</CardContent>
				</Card>
			</aside>

			{/* mobile menu */}

			<aside className='fixed bottom-3 left-1/2 z-20 -translate-x-1/2 px-6 py-6 md:hidden'>
				<Card className='bg-card/50 rounded-full backdrop-blur-md'>
					<CardContent className='flex items-center justify-between gap-3'>
						{PROFILE_MENU.map((item, index) => (
							<ProfileMenuItem key={index} item={item} />
						))}
						<div className='flex items-center gap-2'>
							<LogoutButton className='flex-1 bg-black' />
							<ToggleTheme />
						</div>
					</CardContent>
				</Card>
			</aside>
		</>
	)
}
