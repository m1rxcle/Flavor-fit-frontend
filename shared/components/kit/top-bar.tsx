'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { NAV_ITEMS } from '../../constants'
import { cn } from '../../lib/utils'

interface Props {
	className?: string
}

export const TopBar: React.FC<Props> = ({ className }) => {
	const pathname = usePathname()

	return (
		<section
			className={cn(
				'mb-10 hidden gap-4 md:flex md:flex-wrap md:items-center md:justify-center lg:hidden',
				className
			)}
		>
			{NAV_ITEMS.map((item, index) => (
				<Link
					key={index}
					href={item.href}
					className={cn(
						'bg-secondary group text-secondary-foreground hover:bg-primary text-xs',
						'hover:text-primary-foreground relative flex items-center',
						'gap-2 rounded-md px-4 py-2 transition-colors duration-200 ease-in-out',
						pathname === item.href &&
							'bg-primary text-primary-foreground'
					)}
				>
					<span className='relative z-10 flex items-center gap-2'>
						<item.icon className='h-4 w-4' />
						{item.title}
					</span>
				</Link>
			))}
		</section>
	)
}
