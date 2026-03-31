'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import { NAV_ITEMS } from '@/shared/constants'

import { cn } from '@/shared/lib/utils'

export const HeaderNavigation = () => {
	const [active, setActive] = useState<string>('Home')

	const pathname = usePathname()

	return (
		<nav className='hidden lg:flex lg:items-center lg:justify-between lg:gap-4'>
			{NAV_ITEMS.map((item, index) => (
				<Link
					key={index}
					onClick={() => setActive(item.title)}
					href={item.href}
					className={cn(
						'bg-secondary group text-secondary-foreground hover:bg-primary',
						'hover:text-primary-foreground relative flex items-center gap-2',
						'rounded-full p-2 transition-colors duration-200 ease-in-out',
						pathname === item.href &&
							'bg-primary text-primary-foreground'
					)}
				>
					{active === item.title ? (
						<motion.div
							layoutId='active-pill'
							className='bg-primary text-primary-foreground absolute inset-0 rounded-full'
							transition={{
								type: 'spring',
								stiffness: 500,
								damping: 30
							}}
						/>
					) : null}

					<span className='relative z-10 flex items-center gap-2'>
						<item.icon className='size-4' />
						{item.title}
					</span>
				</Link>
			))}
		</nav>
	)
}
