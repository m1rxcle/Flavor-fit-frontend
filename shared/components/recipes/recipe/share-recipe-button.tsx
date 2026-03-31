import { Share } from 'lucide-react'
import { toast } from 'sonner'

import type { GetBySlugRecipeQuery } from '@/graphql/generated/graphql'

export const ShareRecipeButton = ({
	recipe
}: {
	recipe: GetBySlugRecipeQuery['getRecipeBySlug']
}) => {
	const shareUrl = () => {
		if (typeof window !== 'undefined') {
			return window.location.href
		}
		return ''
	}

	const handleShare = () => {
		if (navigator.share) {
			navigator.share({
				title: `${recipe.title} | FlavorFit`,
				text: `Посмотрите рецепт ${recipe.title} на сайте FlavorFit!`,
				url: shareUrl()
			})
		} else {
			navigator.clipboard.writeText(shareUrl())
			toast.success('Ссылка скопирована в буфер обмена!')
		}
	}

	return (
		<Share
			onClick={handleShare}
			className='text-muted-foreground hover:text-primary size-5 cursor-pointer transition-colors duration-300 ease-in-out hover:scale-110 active:scale-95'
		/>
	)
}
