import type { Metadata } from 'next'

import { Header } from '@/shared/components/header'
import { TopBar } from '@/shared/components/kit'

export const metadata: Metadata = {
	title: 'Flavor Fit',
	description: 'Это сайт для заказа продуктов и обмена вкусными рецептами'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<main className='bg-background min-h-screen'>
			<Header />
			<TopBar />
			{children}
		</main>
	)
}
