import { Croissant } from 'lucide-react'

import { Card, CardContent } from '../ui/card'

export const TotalCreatedRecipes = () => {
	return (
		<Card className='rounded-4xl'>
			<CardContent className='flex h-full flex-col justify-between gap-10 px-6 py-4'>
				<div className='flex items-center gap-2'>
					<Croissant className='text-muted-foreground size-6' />
					<h1 className='text-xl font-bold'>Ваши рецепты</h1>
				</div>
				<p className='text-muted-foreground text-sm'>
					<span className='text-primary text-5xl font-black italic'>
						12{' '}
					</span>
					рецептов создано
				</p>
			</CardContent>
		</Card>
	)
}
