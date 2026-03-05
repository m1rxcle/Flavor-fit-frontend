'use client'

import type { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { cn } from '@/shared/lib/utils'

interface Props {
	item: {
		title: string
		href: string
		icon: LucideIcon
	}
}

export const ProfileMenuItem: React.FC<Props> = ({ item }) => {
	const pathname = usePathname()
	const active = pathname === item.href

	return (
		<Link
			href={item.href}
			className={cn(
				'hover:bg-primary hover:text-primary-foreground group rounded-full p-2 text-justify font-medium transition-colors duration-300 ease-in-out md:px-4 md:py-2',
				active && 'bg-primary text-primary-foreground'
			)}
		>
			<span className='hidden md:block'>{item.title}</span>
			<item.icon
				className={cn(
					active
						? 'text-primary-foreground'
						: 'text-muted-foreground',
					'group-hover:text-primary-foreground inline h-6 w-6 transition-colors duration-300 ease-in-out md:hidden'
				)}
			/>
		</Link>
	)
}
