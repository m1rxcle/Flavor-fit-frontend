import type { Metadata } from 'next'
import Image from 'next/image'

import { GoHomeButton } from '@/shared/components/kit'
import { Card, CardContent } from '@/shared/components/ui/card'

export const metadata: Metadata = {
	title: 'Страница не найдена | Flavor Fit',
	description: 'Страница не найдена'
}

export default function NotFound() {
	return (
		<section className='relative flex min-h-screen items-center justify-center px-4'>
			<div className='layout-gradient' />
			<Card className='bg-accent/30 rounded-4xl border border-white/40 px-4 py-10 shadow-2xl backdrop-blur-2xl dark:bg-white/10'>
				<CardContent className='space-y-2'>
					<div className='pointer-events-none flex items-center justify-between gap-5 select-none'>
						<div className='flex flex-col justify-between gap-4'>
							<h1 className='text-8xl font-black text-white italic text-shadow-md text-shadow-white'>
								404
							</h1>
							<h2 className='text-xl font-bold text-white'>
								Упс... Эта страница не нашлась
							</h2>
							<p className='max-w-md text-sm text-white/80'>
								Возможно, страница была удалена или вы ввели
								неправильный адрес.
							</p>
						</div>
						<Image
							src='/images/auth/maskots/1-maskot.png'
							alt='maskot'
							width={150}
							height={150}
							className='pointer-events-none overflow-x-visible object-cover'
						/>
					</div>
					<div className='rounded-2x mt-4 h-px bg-white/10' />
					<GoHomeButton className='hover:bg-button-background/80 mt-10 rounded-4xl p-4 font-semibold text-white active:scale-98' />
				</CardContent>
			</Card>
		</section>
	)
}
