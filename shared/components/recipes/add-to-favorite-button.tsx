'use client'

import { useMutation } from '@apollo/client/react'
import { Heart } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

import { ToggleLikeDocument } from '@/graphql/generated/graphql'

import { cn } from '@/shared/lib/utils'

interface Props {
	isLiked?: boolean | null
	recipeId: string
}

export const AddToFavoriteButton = ({ isLiked, recipeId }: Props) => {
	const [toggleLike] = useMutation(ToggleLikeDocument)
	const [isRecipeLiked, setIsRecipeLiked] = useState(!!isLiked)

	const handleToggleLike = async (recipeId: string) => {
		try {
			const { data } = await toggleLike({
				variables: {
					recipeId
				}
			})

			if (!data) {
				toast.error('Произошла ошибка', {
					id: 'like-error'
				})
				return
			}

			const changedIsLikedButton = data.toggleLike.isLiked
			setIsRecipeLiked(changedIsLikedButton)

			if (changedIsLikedButton) {
				toast.success('Рецепт успешно добавлен в избранное!', {
					id: 'like-add-success'
				})
			} else {
				toast.warning('Рецепт успешно удален из избранного!', {
					id: 'like-remove-success'
				})
			}
		} catch (error) {
			if (error instanceof Error && error.message) {
				toast.error(error.message, { id: 'like-error' })
			}
			console.log(error)
		}
	}

	return (
		<div>
			<Heart
				className={cn(
					'text-muted-foreground hover:text-primary size-6 cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 active:scale-95',
					isRecipeLiked &&
						'scale-110 fill-red-500 text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.7)] transition-all duration-300 ease-in-out hover:text-red-500 active:scale-95'
				)}
				onClick={() => handleToggleLike(recipeId)}
			/>
		</div>
	)
}
