'use client'

import { LayoutGroup } from 'motion/react'

import { fredoka } from '../layout'

export default function AuthLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<LayoutGroup>
			<section className='relative min-h-screen overflow-hidden'>
				<div className='layout-gradient' />

				<header className='relative px-6 py-6 select-none'>
					<h1
						className={`font-extrabold ${fredoka.className} text-center text-4xl text-white`}
					>
						FlavorFit
					</h1>
					<div className='absolute top-6 right-30 hidden lg:inline'>
						<div className='flex gap-5'>
							<span className='rounded-xl border border-white bg-transparent px-3 py-2 text-white'>
								Рецепты
							</span>
							<span className='bg-background/20 rounded-xl border border-white px-3 py-2 text-white'>
								Прием пищи
							</span>
						</div>
					</div>
				</header>
				<div className='bg-secondary/20 h-px w-full' />
				<main className='relative'>{children}</main>
			</section>
		</LayoutGroup>
	)
}
