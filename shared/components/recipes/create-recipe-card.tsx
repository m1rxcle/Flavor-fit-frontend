import Image from 'next/image'

import { comforter } from '@/app/layout'

import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'

export const CreateRecipeCard = () => {
	return (
		<Card className='bg-accent relative z-10 overflow-visible rounded-4xl'>
			<Image
				src='/images/auth/maskots/2-maskot.png'
				alt='maskot'
				width={150}
				height={150}
				className='pointer-events-none absolute -bottom-0.5 -left-4 z-20 hidden overflow-x-visible object-cover lg:block'
			/>
			<CardContent className='z-10 ml-0 flex flex-col justify-between space-y-4 px-6 py-4 lg:ml-40 lg:flex-row lg:items-start lg:justify-end lg:gap-10 lg:space-y-4'>
				<div className='flex flex-col items-start'>
					<h1
						className={`${comforter.className} text-primary-foreground text-3xl md:text-4xl`}
					>
						Есть рецепт который всем понравится?
					</h1>
					<p className='text-primary-foreground mb-4 text-sm'>
						Поделитесь им с сообществом!
					</p>
					<div className='text-muted-foreground pointer-events-none hidden items-center gap-4 md:flex'>
						<p className='border-secondary text-secondary rounded-xl border p-2'>
							Покажи свой скилл
						</p>
						<p className='border-secondary text-secondary rounded-xl border p-2'>
							Потряси остальных
						</p>
						<p className='border-secondary text-secondary rounded-xl border p-2'>
							Получить признание
						</p>
					</div>
				</div>
				<Button
					variant='secondary'
					className='text-primary cursor-pointer rounded-full'
				>
					<span>+ Создать рецепт</span>
				</Button>
			</CardContent>
		</Card>
	)
}
