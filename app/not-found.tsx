import type { Metadata } from 'next'
import Image from 'next/image'

import { GoHomeButton } from '@/shared/components/go-home-button'
import { Card, CardContent } from '@/shared/components/ui/card'

export const metadata: Metadata = {
	title: 'Страница не найдена | Flavor Fit',
	description: 'Страница не найдена'
}

export default function NotFound() {
	return (
		<section className='relative flex min-h-screen items-center justify-center px-4'>
			<div className='from-accent/50 via-accent/70 to-accent absolute -z-10 h-full w-full bg-radial dark:bg-radial dark:from-neutral-900 dark:via-neutral-950 dark:to-black' />
			<Card className='border-primary-/40 bg-accent/10 rounded-4xl border px-4 backdrop-blur-2xl'>
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
					<GoHomeButton className='hover:bg-button-background/80 mt-10 w-full rounded-4xl p-6 text-2xl font-semibold text-white active:scale-98' />
				</CardContent>
			</Card>
		</section>
	)
}
