import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Заказ продуктов | Flavor Fit',
	description: 'Заказ продуктов Flavor Fit'
}

export default function OrderGroceriesPage() {
	return <h1 className='h-80 bg-white'>OrderGroceries</h1>
}
