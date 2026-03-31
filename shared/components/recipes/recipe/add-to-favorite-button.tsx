'use client'

import { useMutation, useQuery } from '@apollo/client/react'
import { Heart, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

import {
	GetBySlugRecipeDocument,
	GetLikedRecipesDocument,
	SearchRecipeDocument,
	SortRecipeDocument,
	ToggleLikeDocument
} from '@/graphql/generated/graphql'

import { cn } from '@/shared/lib/utils'

interface Props {
	isLiked?: boolean | null
	recipeId: string
}

export const AddToFavoriteButton = ({ isLiked, recipeId }: Props) => {
	const [toggleLike, { loading }] = useMutation(ToggleLikeDocument)
	const { refetch } = useQuery(GetLikedRecipesDocument, {
		variables: {
			take: 10
		}
	})
	const [isRecipeLiked, setIsRecipeLiked] = useState(!!isLiked)

	const handleToggleLike = async (recipeId: string) => {
		try {
			const { data } = await toggleLike({
				variables: {
					recipeId
				},
				refetchQueries: [
					GetLikedRecipesDocument,
					SortRecipeDocument,
					SearchRecipeDocument,
					GetBySlugRecipeDocument
				],
				awaitRefetchQueries: true
			})

			if (!data) {
				toast.error('Произошла ошибка', {
					id: 'like-error'
				})
				return
			}

			const changedIsLikedButton = data.toggleLike.isLiked
			setIsRecipeLiked(changedIsLikedButton)
			await refetch()

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
			{loading ? (
				<Loader2 className='text-muted-foreground size-6 animate-spin' />
			) : (
				<Heart
					className={cn(
						'text-muted-foreground hover:text-primary size-6 cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 active:scale-95',
						isRecipeLiked &&
							'scale-110 fill-red-500 text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.7)] transition-all duration-300 ease-in-out hover:text-red-500 active:scale-95'
					)}
					onClick={() => handleToggleLike(recipeId)}
				/>
			)}
		</div>
	)
}
