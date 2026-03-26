'use client'

import { useMutation } from '@apollo/client/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { LockOpen, UserLock } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { ChangePasswordDocument } from '@/graphql/generated/graphql'

import {
	ChangePasswordSchema,
	type TChangePasswordSchema
} from '@/shared/schemas'

import { cn } from '@/shared/lib/utils'

import { CustomFormInput } from '../kit'
import { Button, Form } from '../ui'

export const ChangePasswordForm = () => {
	const [changePassword, { loading }] = useMutation(ChangePasswordDocument, {
		refetchQueries: ['GetFullProfileAtUser', 'GetMe'],
		awaitRefetchQueries: true
	})
	const form = useForm<TChangePasswordSchema>({
		mode: 'onChange',
		defaultValues: {
			oldPassword: '',
			newPassword: ''
		},
		resolver: zodResolver(ChangePasswordSchema)
	})

	const onSubmit = async (data: TChangePasswordSchema) => {
		try {
			await changePassword({
				variables: {
					data: data
				}
			})

			toast.success('Ваш пароль успешно изменен!', {
				id: 'change-password-success'
			})
			form.reset()
		} catch (error) {
			if (error instanceof Error && error.message) {
				toast.error(error.message, {
					id: 'change-password-error-catch'
				})
			}
			console.log(error)
		}
	}

	return (
		<div className={cn('flex flex-col gap-4')}>
			<div>
				<div className='flex items-center gap-2'>
					<UserLock className='text-muted-foreground' />
					<h1 className='text-2xl font-bold'>Смена пароля</h1>
				</div>
				<p className='text-muted-foreground'>
					Вы можете изменить свой пароль, чтобы защитить свою учетную
					запись
				</p>
			</div>

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='space-y-4'
				>
					<CustomFormInput
						name='oldPassword'
						formControl={form.control}
						label='Введите старый пароль'
						placeholder='Ваш лучший старый пароль'
						type='password'
						content='input'
						contentId='oldPassId'
						loading={loading}
						Icon={LockOpen}
						className='w-full md:w-100'
					/>

					<CustomFormInput
						name='newPassword'
						formControl={form.control}
						label='Введите новый пароль'
						placeholder='Ваш лучший новый пароль'
						type='password'
						content='input'
						contentId='newPassId'
						loading={loading}
						Icon={LockOpen}
						className='w-full md:w-100'
					/>

					<Button
						className='bg-button-background hover:bg-button-background/80 rounded-full'
						size='default'
						type='submit'
						disabled={loading}
					>
						<span className='text-primary text-base font-semibold'>
							Изменить
						</span>
					</Button>
				</form>
			</Form>
		</div>
	)
}
