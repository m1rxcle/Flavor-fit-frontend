'use client'

import { useRouter } from 'next/navigation'

import { cn } from '../lib/utils'

import { Button } from './ui/button'

export const GoHomeButton = ({ className }: { className?: string }) => {
	const router = useRouter()

	return (
		<Button
			className={cn(
				'bg-button-background hover:bg-button-background/80 cursor-pointer',
				className
			)}
			onClick={() => router.push('/')}
		>
			На главную
		</Button>
	)
}
