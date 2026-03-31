import { useMutation } from '@apollo/client/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowUp } from 'lucide-react'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import {
	CreateCommentDocument,
	EditCommentDocument,
	GetAllCommentsFromRecipeDocument
} from '@/graphql/generated/graphql'

import {
	CreateCommentSchema,
	type TCreateCommentSchema
} from '@/shared/schemas'

import { cn } from '@/shared/lib/utils'

import { CustomFormInput } from '../kit'
import { Button, Form } from '../ui'

import { useCommentsStore } from '@/shared/store/comments.store'

interface Props {
	recipeId: string
	className?: string
}

export const AddCommentForm: React.FC<Props> = ({ recipeId, className }) => {
	const [createComment, { loading: createLoading }] = useMutation(
		CreateCommentDocument,
		{
			awaitRefetchQueries: true,
			refetchQueries: ['GetAllCommentsFromRecipe']
		}
	)

	const [editComment, { loading: editLoading }] =
		useMutation(EditCommentDocument)

	const { editingComment } = useCommentsStore()

	const form = useForm<TCreateCommentSchema>({
		mode: 'onSubmit',
		resolver: zodResolver(CreateCommentSchema),
		defaultValues: {
			content: ''
		}
	})

	const handleCreateComment = async (data: TCreateCommentSchema) => {
		try {
			const response = await createComment({
				variables: {
					input: {
						recipeId,
						content: data.content.trim()
					}
				}
			})

			if (!response.data) {
				toast.error('Что-то пошло не так, попробуйте еще раз!')
				return
			}
			toast.success('Комментарий успешно добавлен!')
			form.setValue('content', '')
		} catch (error) {
			if (error instanceof Error && error.message) {
				toast.error(error.message)
			}
			console.log(error)
		}
	}

	const handleEditComment = async (commentId: string, content: string) => {
		if (!commentId) {
			toast.error('Комментарий не найден', {
				id: 'edit-comment-not-found-error-catch'
			})
			return
		}

		if (!content) {
			toast.error('Комментарий не может быть пустым', {
				id: 'edit-comment-empty-error-catch'
			})
			return
		}

		try {
			await editComment({
				variables: {
					id: commentId,
					input: {
						content: content.trim()
					}
				},
				update(cache, { data }) {
					const updated = data?.editComment

					if (!updated) return

					const existing = cache.readQuery({
						query: GetAllCommentsFromRecipeDocument,
						variables: { recipeId }
					})

					if (!existing) return

					cache.writeQuery({
						query: GetAllCommentsFromRecipeDocument,
						variables: { recipeId },
						data: {
							getAllCommentsFromRecipe:
								existing.getAllCommentsFromRecipe.map(c =>
									c.id === updated.id ? updated : c
								)
						}
					})
				}
			})

			toast.success('Комментарий успешно отредактирован!', {
				id: 'edit-comment-success'
			})
			useCommentsStore.setState({
				editingComment: null
			})
			form.setValue('content', '')
		} catch (error) {
			if (error instanceof Error && error.message) {
				toast.error(error.message, { id: 'edit-comment-error-catch' })
			}
			console.log(error)
		}
	}

	const cancelEditing = () => {
		useCommentsStore.setState({
			editingComment: null
		})
		form.setValue('content', '')
	}

	const onSubmit = (data: TCreateCommentSchema) => {
		if (editingComment) {
			handleEditComment(editingComment.id, data.content)
		} else {
			handleCreateComment(data)
		}
	}

	useEffect(() => {
		if (editingComment) {
			form.reset({
				content: editingComment.content
			})
		}
	}, [editingComment])

	const isEditing = !!editingComment

	const toolbarClasses = cn(
		isEditing ? 'max-h-10 opacity-100' : 'max-h-0 p-0 opacity-0',
		'bg-foreground/20 z-10 flex justify-end gap-2 overflow-hidden rounded-t-xl p-0.5 px-2 transition-all duration-300 ease-in-out'
	)

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<div className='flex items-center gap-3'>
					<div
						className={cn(
							'border-input focus-visible:border-ring relative w-full overflow-hidden rounded-2xl border focus-visible:ring-1 focus-visible:ring-offset-1',
							className
						)}
					>
						<div className={toolbarClasses}>
							<Button
								disabled={editLoading}
								type='submit'
								className='rounded-xl'
								variant='secondary'
							>
								<span className='text-foreground text-xs'>
									Сохранить
								</span>
							</Button>
							<Button
								disabled={editLoading}
								type='button'
								className='rounded-xl'
								onClick={cancelEditing}
								variant='secondary'
							>
								<span className='text-foreground text-xs'>
									Отмена
								</span>
							</Button>
						</div>

						<div className='flex-1 px-2 pb-2'>
							<CustomFormInput
								name='content'
								content='textarea'
								formControl={form.control}
								placeholder='Добавьте новый комментарий'
								contentId='content'
								loading={createLoading || editLoading}
								className='h-5 rounded-none border-none! bg-transparent! shadow-none ring-0! focus-visible:ring-0! focus-visible:ring-offset-0!'
								type='text'
							/>
						</div>
					</div>

					<div
						className={cn(
							'transition-all duration-300',
							isEditing
								? 'w-0 translate-y-10 opacity-0'
								: 'w-auto scale-100 opacity-100'
						)}
					>
						{!isEditing && (
							<Button
								disabled={createLoading}
								className='rounded-full p-5'
							>
								<ArrowUp />
							</Button>
						)}
					</div>
				</div>
			</form>
		</Form>
	)
}
