'use client'

import { useMutation } from '@apollo/client/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Turnstile } from '@marsidev/react-turnstile'
import { REGEXP_ONLY_DIGITS } from 'input-otp'
import { Binary, Loader2Icon, Lock, Mail, MailOpen } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { LoginDocument, type LoginInput } from '@/graphql/generated/graphql'

import { LoginSchema, type TLoginSchema } from '@/shared/schemas'

import { cn } from '@/shared/lib/utils'

import { ShowPassword } from '@/shared/utils'

import { Button, InputOTP, InputOTPGroup, InputOTPSlot } from '../ui'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '../ui/form'
import { Input } from '../ui/input'

import { useCaptcha } from '@/shared/hooks/use-captcha'
import { useAuthStore } from '@/shared/store/auth.store'

export const LoginForm = () => {
	const [showCode, setShowCode] = useState<boolean>(false)

	const { ref, captchaToken, isValidated, setCaptchaToken, reset } =
		useCaptcha()

	const { showPassword, setAccessToken, setShowPassword, setUser } =
		useAuthStore()

	const router = useRouter()

	const [loginMutation, { loading }] = useMutation(LoginDocument, {
		errorPolicy: 'all'
	})

	const form = useForm<TLoginSchema>({
		mode: 'all',
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: '',
			password: ''
		}
	})

	const onSubmit = async (data: LoginInput) => {
		if (!isValidated) {
			toast.error('Пожалуйста, подтвердите, что вы не робот!', {
				id: 'captcha-error'
			})
			return
		}

		try {
			const result = await loginMutation({
				variables: { data },
				context: {
					headers: {
						'cf-turnstile-token': captchaToken
					}
				}
			})

			if (result.error) {
				toast.error(result.error.message, { id: 'response-error' })
				reset()
				return
			}

			const response = result.data?.login
			if (!response) return

			const email = response.user?.email ?? data.email
			if (!email) return

			if (response.message && response.message.trim().includes('код')) {
				toast.info(response.message, { id: '2fa-login' })
				reset()
				setShowCode(true)
				return
			}

			if (response.message && response.message.trim().includes('email')) {
				toast.info(response.message, { id: 'verify-login' })
				router.push(
					`/auth/register/verify?email=${encodeURIComponent(email)}`
				)
				return
			}

			setCaptchaToken(null)
			setAccessToken(response.accessToken)
			setUser(response.user ?? null)
			toast.success('Вы успешно вошли в систему!', {
				id: 'login-success'
			})
			router.push('/profile')
		} catch (error) {
			console.error(error)

			if (error instanceof Error && error.message)
				toast.error(error.message, { id: 'login-error' })
		}
	}

	const t = useTranslations('auth.login')

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='login-form'>
				{showCode ? (
					<FormField
						control={form.control}
						name='token'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-muted-foreground'>
									<div className='relative'>
										<span className='pl-8 text-lg'>
											Ваш код двухфакторной аутентификации
										</span>
										<Binary className='absolute top-0 left-0' />
									</div>
								</FormLabel>
								<FormControl>
									<div className='space-y-2'>
										<InputOTP
											value={field.value}
											onChange={field.onChange}
											id='digits-only'
											maxLength={6}
											pattern={REGEXP_ONLY_DIGITS}
											className='w-full'
										>
											<InputOTPGroup className='flex w-full'>
												{Array.from({ length: 6 }).map(
													(_, i) => (
														<InputOTPSlot
															key={i}
															index={i}
															className='h-16 flex-1 border-2 text-lg font-bold transition-all'
														/>
													)
												)}
											</InputOTPGroup>
										</InputOTP>
										<div>
											<h1 className='text-accent'>
												Введите код двухфакторной
												аутентификации который был
												отправлен вам на почту
											</h1>
											<p className='text-muted-foreground'>
												Будьте внимательны - код
												деактивируется через 5 минут
											</p>
										</div>
									</div>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				) : (
					<>
						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormLabel htmlFor='email'>
										<div className='login-email-label_block'>
											<MailOpen className='login-email-label_icon' />
											<span className='login-email-label_text'>
												{t('email-label')}
											</span>
										</div>
									</FormLabel>
									<FormControl>
										<div className='login-email-input_block'>
											<Input
												className='login-email-input'
												id='email'
												type='email'
												placeholder='alan.turing@gmail.com'
												disabled={loading}
												{...field}
											/>
											<Mail className='login-email-input_icon' />
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='password'
							render={({ field }) => (
								<FormItem>
									<FormLabel htmlFor='password'>
										<div className='login-password-label_block'>
											<Lock className='login-password-label_icon' />
											<span className='login-password-label_text'>
												{t('password-label')}
											</span>
											<Link
												href='/auth/reset-password'
												className={cn(
													loading &&
														'login-reset-password-text_loading',
													'login-reset-password-text'
												)}
											>
												{t('forget-password')}
											</Link>
										</div>
									</FormLabel>
									<FormControl>
										<div className='login-password-input_block'>
											<Input
												className='login-password-input'
												id='password'
												type={
													showPassword
														? 'text'
														: 'password'
												}
												placeholder={
													showPassword
														? t(
																'password-placeholder'
															)
														: '********'
												}
												disabled={loading}
												{...field}
											/>
											<Lock className='login-password-input_icon' />
											{loading ? (
												<Loader2Icon className='login-show-password-button_loader' />
											) : (
												<ShowPassword
													className='login-show-password-button'
													showPassword={showPassword}
													setShowPassword={
														setShowPassword
													}
												/>
											)}
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</>
				)}

				<div className='flex justify-center pt-2'>
					<Turnstile
						ref={ref}
						siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
						onSuccess={token => setCaptchaToken(token)}
						onExpire={() => setCaptchaToken(null)}
					/>
				</div>
				<Button
					disabled={loading}
					type='submit'
					className='login-submit-button'
				>
					{loading ? (
						<Loader2Icon className='login-submit-button_loader' />
					) : (
						<span>{t('button-label')}</span>
					)}
				</Button>
			</form>
		</Form>
	)
}
