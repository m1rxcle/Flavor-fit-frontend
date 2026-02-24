import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Форум | Flavor Fit',
	description: 'Форум сообщений и обмена вкусными рецептами'
}

export default function ForumPage() {
	return <h1 className='h-80 bg-white'>Forum</h1>
}
