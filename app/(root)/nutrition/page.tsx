import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Питание | Flavor Fit',
	description: 'Ваше питание в Flavor Fit'
}

export default function NutritionPage() {
	return <h1 className='h-80 bg-white'>Nutrition</h1>
}
