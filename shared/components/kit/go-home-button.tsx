'use client'

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { cn } from '../../lib/utils'
import { Button } from '../ui'

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
			<ArrowLeft className='ml-2' />
			<span className='text-lg'>На главную</span>
		</Button>
	)
}
