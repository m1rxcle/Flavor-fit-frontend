import { useMutation } from '@apollo/client/react'
import { EllipsisVertical, Pencil, Trash2 } from 'lucide-react'
import { type Dispatch, type SetStateAction } from 'react'
import { toast } from 'sonner'

import {
	type DeleteCommentMutation,
	type DeleteCommentMutationVariables,
	type GetAllCommentsFromRecipeQuery
} from '@/graphql/generated/graphql'

import { Button, Popover, PopoverContent, PopoverTrigger } from '../ui'

import { useCommentsStore } from '@/shared/store/comments.store'

interface Props {
	comment: GetAllCommentsFromRecipeQuery['getAllCommentsFromRecipe'][number]

	ableToShowActions?: boolean
	showActions: boolean
	setShowActions: Dispatch<SetStateAction<boolean>>
	deleteComment: useMutation.MutationFunction<
		DeleteCommentMutation,
		DeleteCommentMutationVariables
	>
}

export const CommentActions = ({
	comment,
	ableToShowActions,
	showActions,
	deleteComment,
	setShowActions
}: Props) => {
	const { setEditingComment } = useCommentsStore()

	if (!ableToShowActions) return null

	const handleDelete = async (id: string) => {
		try {
			await deleteComment({
				variables: {
					id
				},
				update(cache) {
					cache.modify({
						fields: {
							getAllCommentsFromRecipe(
								existingRefs = [],
								{ readField }
							) {
								return existingRefs.filter(
									(ref: GetAllCommentsFromRecipeQuery) =>
										readField('id', ref) !== id
								)
							}
						}
					})
				}
			})

			toast.success('Комментарий успешно удален!', {
				id: 'delete-comment-success'
			})
		} catch (error) {
			if (error instanceof Error && error.message) {
				toast.error(error.message, { id: 'delete-comment-error-catch' })
			}
			console.log(error)
		}
	}

	return (
		<div>
			<Popover open={showActions} onOpenChange={setShowActions}>
				<PopoverTrigger asChild>
					<EllipsisVertical className='size-4 cursor-pointer' />
				</PopoverTrigger>
				<PopoverContent align='end' className='w-45'>
					<div className='space-y-2'>
						<Button
							asChild
							variant='outline'
							size='sm'
							className='w-full hover:bg-transparent hover:opacity-80 active:scale-98'
							onClick={() => {
								setEditingComment(comment)
								setShowActions(false)
							}}
						>
							<div className='flex items-center gap-2'>
								<Pencil className='text-muted-foreground size-4' />
								<p className='text-sm'>Редактировать</p>
							</div>
						</Button>
						<Button
							asChild
							variant='destructive'
							size='sm'
							className='w-full'
						>
							<div
								className='flex items-center gap-2 hover:opacity-80 active:scale-98'
								onClick={() => handleDelete(comment.id)}
							>
								<Trash2 className='size-4 text-white' />
								<p className='text-sm text-white'>Удалить</p>
							</div>
						</Button>
					</div>
				</PopoverContent>
			</Popover>
		</div>
	)
}
