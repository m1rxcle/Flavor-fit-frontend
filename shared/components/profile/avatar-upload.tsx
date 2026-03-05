'use client'

import { Edit, User2 } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { toast } from 'sonner'

import { SERVER_URL } from '@/shared/config'

import { cn } from '@/shared/lib/utils'

interface Props {
	value?: string | undefined | null
	onChange?: (value: string) => void
	className?: string
}

export const AvatarUpload: React.FC<Props> = ({
	value,
	className,
	onChange
}) => {
	const [isLoading, setIsLoading] = useState(false)
	const [imageError, setImageError] = useState(false)

	const avatarUrl = value && `${SERVER_URL}${value}`
	const showFallback = !avatarUrl || imageError

	const handleUpload = async (file: File) => {
		setIsLoading(true)

		const formData = new FormData()
		formData.append('file', file)

		const response = await fetch(`${SERVER_URL}/media-upload/avatar`, {
			method: 'POST',
			body: formData,
			credentials: 'include'
		})

		if (!response.ok) {
			setIsLoading(false)
			toast.error(
				response.statusText ||
					'Что-то пошло не так, попробуйте еще раз!'
			)
			return
		}

		const data = await response.json()
		console.log(data)

		if (onChange) onChange(data.url)

		setIsLoading(false)
	}

	return (
		<div className='flex items-center gap-3'>
			<div className='relative'>
				{!showFallback ? (
					<div className={cn('h-16 w-16 rounded-full', className)}>
						<Image
							unoptimized
							src={avatarUrl}
							fill
							alt='avatar'
							className='pointer-events-none rounded-full object-cover select-none'
							onError={() => setImageError(true)}
						/>
					</div>
				) : (
					<div className='bg-foreground rounded-full p-3'>
						<User2 className='text-primary-foreground' />
					</div>
				)}
				{onChange && (
					<label className='bg-card absolute -right-4 -bottom-3 cursor-pointer rounded-full p-2'>
						<input
							className='cursor-pointer'
							disabled={isLoading}
							type='file'
							hidden
							accept='image/*'
							onChange={e => {
								e.preventDefault()
								const file = e.target.files?.[0]
								if (file) handleUpload(file)
							}}
						/>
						<Edit className='text-primary h-4 w-4' />
					</label>
				)}
			</div>
		</div>
	)
}
