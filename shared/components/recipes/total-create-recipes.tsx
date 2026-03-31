import { Croissant } from 'lucide-react'
import Image from 'next/image'

import { Card, CardContent } from '../ui/card'

export const TotalCreatedRecipes = () => {
	return (
		<Card className='flex-1 rounded-4xl'>
			<CardContent className='flex h-full flex-col justify-between gap-10'>
				<div className='flex items-center gap-2'>
					<Croissant className='text-muted-foreground size-6' />
					<h1 className={`text-2xl font-bold`}>Ваши рецепты</h1>
				</div>
				<div className='flex items-center justify-between'>
					<p className='text-muted-foreground text-sm'>
						<span className='text-primary text-5xl font-black italic'>
							12{' '}
						</span>
						рецептов создано
					</p>
					<div className='flex items-center'>
						{Array.from({ length: 5 }).map((_, index) => (
							<div
								key={index}
								className='-ml-3 flex items-center'
							>
								<Image
									src='/images/main-logo.png'
									alt='recipe'
									width={30}
									height={30}
									className='pointer-events-none rounded-full select-none'
								/>
							</div>
						))}
					</div>
				</div>
			</CardContent>
		</Card>
	)
}
