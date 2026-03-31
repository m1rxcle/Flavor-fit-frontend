import { HeartCrack } from 'lucide-react'

export const EmptyFavoritesRecipes = () => {
	return (
		<div className='flex flex-col items-center justify-center gap-4 py-10'>
			<HeartCrack className='text-accent size-24' />
			<h2 className='text-2xl font-semibold'>
				У вас еще нет избранных рецептов
			</h2>
			<p className='text-muted-foreground'>
				Добавьте рецепты в избранное, чтобы они отображались здесь.
			</p>
		</div>
	)
}
