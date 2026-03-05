import { BellIcon, HeadsetIcon } from 'lucide-react'

import { cn } from '../../lib/utils'

import { HeaderLogo } from './header-logo'
import { HeaderNavigation } from './header-navigation'
import { HeaderProfile } from './header-profile'
import { MobileHeaderNavigation } from './mobile-header-navigation'

interface Props {
	className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<header
			className={cn(
				'flex items-center justify-between px-6 py-4',
				className
			)}
		>
			<div className='flex items-center justify-between gap-10'>
				{/* Logo */}
				<HeaderLogo />
				{/* Navigation */}
				<HeaderNavigation />{' '}
			</div>

			<div className='flex items-center justify-between gap-6'>
				{/* notifications */}
				<div className='flex items-center gap-2'>
					<div className='bg-card hidden rounded-full p-3 md:block'>
						<HeadsetIcon className='text-secondary-foreground' />
					</div>
					<div className='bg-card rounded-full p-3'>
						<BellIcon className='text-secondary-foreground' />
					</div>
				</div>
				{/* profile */}
				<HeaderProfile />

				{/* mobile navigation */}
				<MobileHeaderNavigation />
			</div>
		</header>
	)
}
