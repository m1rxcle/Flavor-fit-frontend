'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import React from 'react'

import { cn } from '../../lib/utils'
import { Button } from '../ui'

interface Props {
	className?: string
}

export const ToggleTheme: React.FC<Props> = ({ className }) => {
	const { setTheme } = useTheme()

	return (
		<Button
			className={cn('relative cursor-pointer rounded-2xl', className)}
			onClick={() => {
				if (document.startViewTransition) {
					document.startViewTransition(() => {
						setTheme(theme => (theme === 'dark' ? 'light' : 'dark'))
					})
				} else {
					setTheme(theme => (theme === 'dark' ? 'light' : 'dark'))
				}
			}}
		>
			<Sun className='scale-100 rotate-0 transition-all duration-100 ease-in-out dark:scale-0 dark:-rotate-90' />
			<Moon className='absolute scale-0 rotate-90 transition-all duration-100 ease-in-out dark:scale-100 dark:rotate-0' />
		</Button>
	)
}
