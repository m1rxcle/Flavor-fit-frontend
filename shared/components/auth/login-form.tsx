'use client'

import { useMutation } from '@apollo/client/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2Icon, Lock, Mail, MailOpen } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { LoginDocument, type LoginInput } from '@/graphql/generated/graphql'

import { LoginSchema, type TLoginSchema } from '@/shared/schemas'

import { cn } from '@/shared/lib/utils'

import { ShowPassword } from '@/shared/utils'

import { Button } from '../ui'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '../ui/form'
import { Input } from '../ui/input'

import { useAuthStore } from '@/shared/store/auth.store'

export const LoginForm = () => {
	const router = useRouter()
	const [loginMutation, { loading }] = useMutation(LoginDocument, {
		errorPolicy: 'all'
	})

	const { showPassword, setAccessToken, setShowPassword, setUser } =
		useAuthStore()

	const form = useForm<TLoginSchema>({
		mode: 'all',
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: '',
			password: ''
		}
	})

	const onSubmit = async (data: LoginInput) => {
		try {
			const result = await loginMutation({
				variables: { data }
			})

			if (result.error) {
				toast.error(result.error.message)
				return
			}

			const response = result.data?.login
			if (!response) return

			setAccessToken(response.accessToken)
			setUser(response.user ?? null)
			toast.success('Вы успешно вошли в систему!')
			router.push('/')
		} catch (error) {
			console.error(error)
			if (error instanceof Error && error.message)
				toast.error(error.message)
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='login-form'>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel htmlFor='email'>
								<div className='login-email-label_block'>
									<MailOpen className='login-email-label_icon' />
									<span className='login-email-label_text'>
										Ваша почта
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
										Ваш пароль
									</span>
									<Link
										href='/reset-password'
										className={cn(
											loading &&
												'login-reset-password-text_loading',
											'login-reset-password-text'
										)}
									>
										Забыли пароль?
									</Link>
								</div>
							</FormLabel>
							<FormControl>
								<div className='login-password-input_block'>
									<Input
										className='login-password-input'
										id='password'
										type={
											showPassword ? 'text' : 'password'
										}
										placeholder={
											showPassword
												? 'Ваш самый надежный пароль'
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
											setShowPassword={setShowPassword}
										/>
									)}
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					disabled={loading}
					type='submit'
					className='login-submit-button'
				>
					{loading ? (
						<Loader2Icon className='login-submit-button_loader' />
					) : (
						<span>Войти</span>
					)}
				</Button>
			</form>
		</Form>
	)
}
