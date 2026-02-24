'use client'

import { LayoutGroup } from 'motion/react'
import Image from 'next/image'

import { fredoka } from '../layout'

export default function AuthLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<LayoutGroup>
			<section className='relative min-h-screen overflow-hidden'>
				<Image
					src='/images/auth/desktop/auth-bg.png'
					alt='background'
					priority
					fill
					className='-z-10 object-cover'
				/>
				<header className='relative px-6 py-6'>
					<h1
						className={`font-extrabold ${fredoka.className} text-primary-foreground text-center text-4xl`}
					>
						FlavorFit
					</h1>
					<div className='absolute top-6 right-30 hidden lg:inline'>
						<div className='flex gap-5'>
							<span className='text-primary-foreground border-border rounded-xl border bg-transparent px-3 py-2'>
								Рецепты
							</span>
							<span className='text-primary-foreground bg-secondary/20 border-border rounded-xl border px-3 py-2'>
								Прием пищи
							</span>
						</div>
					</div>
				</header>
				<div className='bg-secondary/20 h-px w-full' />
				<main className='relative'>
					{children}
					<div className='pointer-events-none absolute -top-20 -right-70 -z-10 hidden max-w-[clamp(400px,45vw,800px)] lg:block'>
						<Image
							className='mt-20 rounded-2xl opacity-75'
							src='/images/auth/desktop/helper.jpg'
							alt='helper'
							priority
							width={800}
							height={800}
						/>
					</div>
				</main>
			</section>
		</LayoutGroup>
	)
}
