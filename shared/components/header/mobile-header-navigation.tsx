'use client'

import { MenuIcon, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { NAV_ITEMS } from '@/shared/constants'

import { cn } from '@/shared/lib/utils'

interface Props {
	className?: string
}

export const MobileHeaderNavigation: React.FC<Props> = ({ className }) => {
	const [open, setOpen] = useState(false)

	useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}

		return () => {
			document.body.style.overflow = ''
		}
	}, [open])

	return (
		<section className='block md:hidden'>
			<MenuIcon
				onClick={() => setOpen(!open)}
				className='cursor-pointer'
			/>
			{open ? (
				<nav
					className={cn(
						'bg-card/50 fixed inset-0 z-50 translate-y-0 p-4 backdrop-blur-xl transition-all duration-500 ease-in-out md:hidden',
						className
					)}
				>
					<div className='relative flex flex-col gap-2'>
						{NAV_ITEMS.map((item, index) => (
							<Link
								key={index}
								onClick={() => setOpen(false)}
								href={item.href}
								className={cn(
									'bg-secondary group text-secondary-foreground hover:bg-primary hover:text-primary-foreground relative rounded-full px-4 py-3 transition-colors duration-200 ease-in-out',
									index === 0 && 'w-12/14'
								)}
							>
								{item.title}
							</Link>
						))}
						<X
							onClick={() => setOpen(!open)}
							className='absolute top-3 right-3 cursor-pointer transition-all duration-500 ease-in-out hover:rotate-90'
						/>
					</div>
				</nav>
			) : (
				<nav
					className={cn(
						'bg-card/50 fixed inset-0 z-50 -translate-y-full p-4 backdrop-blur-xl transition-all duration-500 ease-in-out md:hidden',
						className
					)}
				>
					<div className='relative flex flex-col gap-2'>
						{NAV_ITEMS.map((item, index) => (
							<Link
								key={index}
								onClick={() => setOpen(false)}
								href={item.href}
								className={cn(
									'bg-secondary group text-secondary-foreground hover:bg-primary hover:text-primary-foreground relative rounded-full px-4 py-3 transition-colors duration-200 ease-in-out',
									index === 0 && 'w-12/14'
								)}
							>
								{item.title}
							</Link>
						))}
						<X
							onClick={() => setOpen(!open)}
							className='absolute top-3 right-3 cursor-pointer transition-all duration-500 ease-in-out hover:rotate-90'
						/>
					</div>
				</nav>
			)}
		</section>
	)
}
