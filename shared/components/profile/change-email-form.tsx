'use client'

import { useMutation } from '@apollo/client/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, MailOpen } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { ChangeEmailDocument } from '@/graphql/generated/graphql'

import { ChangeEmailSchema, type TChangeEmailSchema } from '@/shared/schemas'

import { cn } from '@/shared/lib/utils'

import { CustomFormInput } from '../kit'
import { Button, Form } from '../ui'

export const ChangeEmailForm = () => {
	const [changeEmail, { loading }] = useMutation(ChangeEmailDocument, {
		refetchQueries: ['GetFullProfileAtUser', 'GetMe'],
		awaitRefetchQueries: true
	})
	const form = useForm<TChangeEmailSchema>({
		mode: 'onSubmit',

		defaultValues: {
			newEmail: ''
		},
		resolver: zodResolver(ChangeEmailSchema)
	})

	const onSubmit = async (data: TChangeEmailSchema) => {
		try {
			await changeEmail({
				variables: {
					data: data
				}
			})

			toast.success('Ваша почта успешно изменена!', {
				id: 'change-email-success'
			})
			form.reset()
		} catch (error) {
			if (error instanceof Error && error.message) {
				toast.error(error.message, { id: 'change-email-error-catch' })
			}
			console.log(error)
		}
	}

	return (
		<div className={cn('flex flex-col gap-4')}>
			<div className='flex items-center gap-2'>
				<MailOpen className='text-muted-foreground' />
				<h1 className='text-2xl font-bold'>Смена почты</h1>
			</div>
			<p className='text-accent border-muted-foreground w-full rounded-md border-2 border-dashed bg-slate-700/10 p-4 backdrop-blur-2xl md:w-10/12'>
				<span className='font-bold uppercase'>Внимание!</span> Если вы
				смените почту,то при последующем входе в систему, вам нужно
				будет ее подтвердить!
			</p>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='space-y-4'
				>
					<CustomFormInput
						name='newEmail'
						formControl={form.control}
						label='Новая почта'
						placeholder='Введите новую почту'
						type='email'
						content='input'
						contentId='newEmailId'
						loading={loading}
						Icon={Mail}
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
