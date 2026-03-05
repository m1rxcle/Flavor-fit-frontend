'use client'

import { useMutation } from '@apollo/client/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2Icon, Mail, MailOpen } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import {
	type RecoveryInput,
	ResetPasswordDocument
} from '@/graphql/generated/graphql'

import {
	ResetPasswordSchema,
	type TResetPasswordSchema
} from '@/shared/schemas/reset-password-schema'

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

export const ResetForm = () => {
	const [resetPassword, { loading }] = useMutation(ResetPasswordDocument)

	const form = useForm<TResetPasswordSchema>({
		resolver: zodResolver(ResetPasswordSchema),
		defaultValues: {
			email: ''
		},
		mode: 'all'
	})

	const onSubmit = async (data: RecoveryInput) => {
		console.log(data)
		try {
			await resetPassword({
				variables: {
					data: {
						email: data.email
					}
				}
			})

			toast.success('Письмо отправлено на почту!', {
				description: `Проверьте введенную почту ${data.email}, и следуйте инструкциям в письме!`
			})
		} catch (error) {
			console.error(error)
			if (error instanceof Error && error.message) {
				toast.error(error.message)
			}
		}
	}

	const t = useTranslations('auth.reset')

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='grid gap-2 space-y-2'
			>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel htmlFor='email'>
								<div className='relative flex items-center'>
									<MailOpen className='text-muted-foreground absolute left-0 h-6 w-6' />
									<span className='pl-8 text-lg font-bold'>
										{t('email-label')}
									</span>
								</div>
							</FormLabel>
							<FormControl>
								<div className='relative flex items-center'>
									<Input
										className='focus-visible:ring-primary py-6 pl-12 font-bold placeholder:text-lg focus-visible:ring-[1px]'
										id='email'
										type='email'
										placeholder='alan.turing@gmail.com'
										disabled={loading}
										{...field}
									/>
									<Mail className='text-muted-foreground absolute left-2 ml-2 h-6 w-6' />
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
						<span>{t('button-label')}</span>
					)}
				</Button>
			</form>
		</Form>
	)
}
