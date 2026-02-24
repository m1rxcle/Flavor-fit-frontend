import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Аналитика | Flavor Fit',
	description: 'Страница аналитики вашего тела Flavor Fit'
}

export default function AnalyticsPage() {
	return <h1 className='h-80 bg-white'>Analytics</h1>
}
