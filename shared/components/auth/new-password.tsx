'use client'

import { useMutation } from '@apollo/client/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2Icon, Lock } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { NewPasswordDocument } from '@/graphql/generated/graphql'

import { NewPasswordSchema, type TNewPasswordSchema } from '@/shared/schemas'

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

export const NewPassword = () => {
	const [showPassword, setShowPassword] = React.useState<boolean>(false)
	const [showRepeatPassword, setShowRepeatPassword] =
		React.useState<boolean>(false)

	const params = useParams<{ token: string }>()
	const router = useRouter()

	const [newPassword, { loading }] = useMutation(NewPasswordDocument)

	const form = useForm<TNewPasswordSchema>({
		resolver: zodResolver(NewPasswordSchema),
		defaultValues: {
			password: '',
			confirmPassword: ''
		},
		mode: 'all'
	})

	const onSubmit = async (data: TNewPasswordSchema) => {
		console.log(data)
		try {
			await newPassword({
				variables: {
					data: {
						token: params.token,
						newPassword: data.password,
						confirmPassword: data.confirmPassword
					}
				}
			})

			toast.success('Пароль успешно изменен!')
			router.push('/login')
		} catch (error) {
			console.error(error)
			if (error instanceof Error && error.message) {
				toast.error(error.message)
			}
		}
	}

	return (
		<>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='grid gap-2 space-y-2'
				>
					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<FormLabel htmlFor='password'>
									<div className='relative flex-1 items-center'>
										<Lock className='text-muted-foreground absolute left-0 h-6 w-6' />
										<span className='pl-8 text-lg font-bold'>
											Ваш новый пароль
										</span>
									</div>
								</FormLabel>
								<FormControl>
									<div className='relative flex items-center'>
										<Input
											className='focus-visible:ring-accent rounded-xl py-6 pl-12 font-bold placeholder:text-lg focus-visible:ring-[1px]'
											id='password'
											type={
												showPassword
													? 'text'
													: 'password'
											}
											placeholder={
												showPassword
													? 'Ваш самый надежный пароль'
													: '********'
											}
											disabled={loading}
											{...field}
										/>
										<Lock className='text-muted-foreground absolute left-2 ml-2 h-6 w-6' />
										{loading ? (
											<Loader2Icon className='absolute right-2 mr-2 size-4 animate-spin' />
										) : (
											<ShowPassword
												className='absolute right-2 mr-2 cursor-pointer'
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

					<FormField
						control={form.control}
						name='confirmPassword'
						render={({ field }) => (
							<FormItem>
								<FormLabel htmlFor='confirmPassword'>
									<div className='relative flex-1 items-center'>
										<Lock className='text-muted-foreground absolute left-0 h-6 w-6' />
										<span className='pl-8 text-lg font-bold'>
											Повторите ваш пароль
										</span>
									</div>
								</FormLabel>
								<FormControl>
									<div className='relative flex items-center'>
										<Input
											className='focus-visible:ring-accent rounded-xl py-6 pl-12 font-bold placeholder:text-lg focus-visible:ring-[1px]'
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
										<Lock className='text-muted-foreground absolute left-2 ml-2 h-6 w-6' />
										{loading ? (
											<Loader2Icon className='absolute right-2 mr-2 size-4 animate-spin' />
										) : (
											<ShowPassword
												className='absolute right-2 mr-2 cursor-pointer'
												showPassword={
													showRepeatPassword
												}
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
						className='text-primary bg-button-background hover:bg-button-background/70 cursor-pointer rounded-2xl p-6 text-xl font-semibold transition-all duration-300 ease-in-out hover:scale-101 active:scale-98'
					>
						{loading ? (
							<Loader2Icon className='mr-2 size-8 animate-spin' />
						) : (
							<span>Подтвердить</span>
						)}
					</Button>
				</form>
			</Form>
		</>
	)
}
