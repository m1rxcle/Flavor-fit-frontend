'use client'
import { useMutation } from '@apollo/client/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2Icon, Lock, Mail, MailOpen, UserIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import {
	RegisterDocument,
	type RegisterInput
} from '@/graphql/generated/graphql'

import { RegisterSchema, type TRegisterSchema } from '@/shared/schemas'

import { ShowPassword } from '@/shared/utils'

import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input
} from '../ui'

import { useAuthStore } from '@/shared/store/auth.store'

export const RegisterForm = () => {
	const router = useRouter()

	const {
		showPassword,
		showRepeatPassword,
		setShowPassword,
		setShowRepeatPassword
	} = useAuthStore()

	const [registerMutation, { loading }] = useMutation(RegisterDocument)

	const form = useForm<TRegisterSchema>({
		mode: 'all',
		resolver: zodResolver(RegisterSchema),
		defaultValues: {
			fullName: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	})

	const onSubmit = async (data: RegisterInput) => {
		try {
			const result = await registerMutation({
				variables: {
					data: {
						fullName: data.fullName,
						email: data.email,
						password: data.password
					}
				}
			})

			const response = result.data?.register
			if (!response) return

			toast.success(`Вы успешно зарегистрировались!`, {
				description: `На вашу почту ${response.email} 
                         отправлено письмо с подтверждением,
                         пожалуйста проверьте свою почту и подтвердите регистрацию!`
			})
			router.push(
				`/register/verify?email=${encodeURIComponent(response.email)}`
			)
		} catch (error: unknown) {
			if (error instanceof Error && error.message) {
				toast.error(error.message)
			} else {
				toast.error(
					'Произошла ошибка при регистрации. Пожалуйста, попробуйте снова.'
				)
				console.error(error)
			}
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='register-form'
			>
				<FormField
					control={form.control}
					name='fullName'
					render={({ field }) => (
						<FormItem>
							<FormLabel htmlFor='fullName'>
								<div className='register-fullname-label_block'>
									<UserIcon className='register-fullname-label_icon' />
									<span className='register-fullname-label_text'>
										Ваше полное имя
									</span>
								</div>
							</FormLabel>
							<FormControl>
								<div className='register-fullname-input_block'>
									<Input
										className='register-fullname-input'
										id='fullName'
										type='text'
										placeholder='Alan Turing'
										disabled={loading}
										{...field}
									/>
									<UserIcon className='register-fullname-input_icon' />
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel htmlFor='email'>
								<div className='register-email-label_block'>
									<MailOpen className='register-email-label_icon' />
									<span className='register-email-label_text'>
										Ваша почта
									</span>
								</div>
							</FormLabel>
							<FormControl>
								<div className='register-email-input_block'>
									<Input
										className='register-email-input'
										id='email'
										type='email'
										placeholder='alan.turing@gmail.com'
										disabled={loading}
										{...field}
									/>
									<Mail className='register-email-input_icon' />
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
								<div className='register-password-label_block'>
									<Lock className='register-password-label_icon' />
									<span className='register-password-label_text'>
										Ваш пароль
									</span>
								</div>
							</FormLabel>
							<FormControl>
								<div className='register-password-input_block'>
									<Input
										className='register-password-input'
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
									<Lock className='register-password-input_icon' />
									{loading ? (
										<Loader2Icon className='register-show-password-button_loader' />
									) : (
										<ShowPassword
											className='register-show-password-button'
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

				<FormField
					control={form.control}
					name='confirmPassword'
					render={({ field }) => (
						<FormItem>
							<FormLabel htmlFor='confirmPassword'>
								<div className='register-confirm-password-label_block'>
									<Lock className='register-confirm-password-label_icon' />
									<span className='register-confirm-password-label_text'>
										Повторите ваш пароль
									</span>
								</div>
							</FormLabel>
							<FormControl>
								<div className='register-confirm-password-input_block'>
									<Input
										className='register-confirm-password-input'
										id='confirmPassword'
										type={
											showRepeatPassword
												? 'text'
												: 'password'
										}
										placeholder={
											showRepeatPassword
												? 'Ваш самый надежный пароль'
												: '********'
										}
										disabled={loading}
										{...field}
									/>
									<Lock className='register-confirm-password-input_icon' />
									{loading ? (
										<Loader2Icon className='register-show-repeat-password-button_loader' />
									) : (
										<ShowPassword
											className='register-show-repeat-password-button'
											showPassword={showRepeatPassword}
											setShowPassword={
												setShowRepeatPassword
											}
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
					className='register-submit-button'
				>
					{loading ? (
						<Loader2Icon className='register-submit-button_loader' />
					) : (
						<span>Зарегистрироваться</span>
					)}
				</Button>
			</form>
		</Form>
	)
}
