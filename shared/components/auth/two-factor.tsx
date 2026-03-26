'use client'

import { useMutation } from '@apollo/client/react'
import { REGEXP_ONLY_DIGITS } from 'input-otp'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'sonner'

import {
	LoginDocument,
	ResendVerificationEmailDocument
} from '@/graphql/generated/graphql'

import { cn } from '@/shared/lib/utils'

import { Field, FieldLabel, InputOTP, InputOTPGroup, InputOTPSlot } from '../ui'

import { useAuthStore } from '@/shared/store/auth.store'

export const TwoFactorOtp = () => {
	const {
		code,
		isResendDisabled,
		secondsLeft,
		setCode,
		setIsResendDisabled,
		setSecondsLeft
	} = useAuthStore()

	const router = useRouter()
	const searchParams = useSearchParams()

	const [loginMutation, { loading }] = useMutation(LoginDocument, {
		errorPolicy: 'all'
	})
	const [resendToken, { loading: resendLoading }] = useMutation(
		ResendVerificationEmailDocument
	)

	useEffect(() => {
		if (!isResendDisabled) return

		const minuteTimer = setTimeout(() => {
			setIsResendDisabled(false)
		}, 60000)
		return () => clearTimeout(minuteTimer)
	}, [isResendDisabled])

	useEffect(() => {
		if (!isResendDisabled) return
		const interval = setInterval(() => {
			if (secondsLeft > 0) {
				setSecondsLeft(secondsLeft - 1)
			} else {
				clearInterval(interval)
			}
		}, 1000)
		return () => clearInterval(interval)
	}, [isResendDisabled, secondsLeft, setSecondsLeft])

	const handleChange = async (value: string) => {
		setCode(value)

		if (value.length === 6) {
			try {
				const result = await loginMutation({
					variables: {
						data: {
							email: useAuthStore.getState().emailFor2fa,
							password: useAuthStore.getState().passwordFor2fa,
							token: value
						}
					}
				})

				const response = result.data?.login

				if (!response) return

				toast.success('Вы успешно вошли в систему!')
				router.push('/')
				setCode('')
				return
			} catch (error) {
				console.error(error)
				setCode('')
				if (error instanceof Error && error.message) {
					toast.error(error.message)
				}
			}
		}
	}

	const handleResendToken = async () => {
		try {
			await resendToken({
				variables: {
					data: searchParams.get('email') as string
				}
			})
			toast.success('Новый код был отправлен на вашу почту!')
			setCode('')
			setIsResendDisabled(true)
			setSecondsLeft(60)
		} catch (error) {
			if (error instanceof Error && error.message) {
				toast.error(error.message)
			}
		}
	}

	const t = useTranslations('auth.verify')

	return (
		<Field className='w-full'>
			<FieldLabel htmlFor='digits-only' className='text-lg'>
				{t('label')}
			</FieldLabel>
			<InputOTP
				value={code}
				onChange={handleChange}
				id='digits-only'
				maxLength={6}
				pattern={REGEXP_ONLY_DIGITS}
				className='w-full'
				disabled={loading}
			>
				<InputOTPGroup className='flex w-full'>
					{Array.from({ length: 6 }).map((_, i) => (
						<InputOTPSlot
							key={i}
							index={i}
							className='h-16 flex-1 border-2 text-lg font-bold transition-all'
						/>
					))}
				</InputOTPGroup>
			</InputOTP>

			{!isResendDisabled ? (
				<p
					onClick={handleResendToken}
					className={cn(
						resendLoading
							? 'text-muted-foreground cursor-not-allowed'
							: 'text-button-background cursor-pointer hover:underline',
						'text-base font-bold'
					)}
				>
					{t('resend')}
				</p>
			) : (
				<p className='text-muted-foreground text-base font-bold'>
					{t('wait', { secondsLeft })}
				</p>
			)}

			<Link
				href='/register'
				className='text-foreground mt-4 text-center font-bold hover:underline'
			>
				<span>{t('footer')}</span>
			</Link>
		</Field>
	)
}
