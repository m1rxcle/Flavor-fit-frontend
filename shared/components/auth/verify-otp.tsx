'use client'

import { useMutation } from '@apollo/client/react'
import { REGEXP_ONLY_DIGITS } from 'input-otp'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'sonner'

import {
	ResendVerificationEmailDocument,
	VerifyDocument
} from '@/graphql/generated/graphql'

import { cn } from '@/shared/lib/utils'

import { Field, FieldLabel } from '../ui/field'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../ui/input-otp'

import { useAuthStore } from '@/shared/store/auth.store'

export const VerifyOtp = () => {
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

	const [verify, { loading: verifyLoading }] = useMutation(VerifyDocument)

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
				await verify({
					variables: { data: { token: value } }
				})
				toast.success('Вы успешно подтвердили регистрацию!')
				router.push('/login')
			} catch (error) {
				console.error(error)
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

	return (
		<Field className='w-full'>
			<FieldLabel htmlFor='digits-only' className='text-lg'>
				Введите 6-ти значный код который был отправлен на вашу почту
			</FieldLabel>
			<InputOTP
				value={code}
				onChange={handleChange}
				id='digits-only'
				maxLength={6}
				pattern={REGEXP_ONLY_DIGITS}
				className='w-full'
				disabled={verifyLoading}
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
					Запросить код повторно
				</p>
			) : (
				<p className='text-muted-foreground text-base font-bold'>
					Запросить код повторно можно через - {secondsLeft} секунд
				</p>
			)}

			<Link
				href='/register'
				className='text-foreground mt-4 text-center font-bold hover:underline'
			>
				<span>Обратно к регистрации</span>
			</Link>
		</Field>
	)
}
