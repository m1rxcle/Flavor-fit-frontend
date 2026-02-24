import type { Metadata } from 'next'

import { SearchInput } from '@/shared/components/search-input'
import { Card, CardContent } from '@/shared/components/ui/card'

export const metadata: Metadata = {
	title: 'Домашняя страница | Flavor Fit',
	description: 'Домашняя страница сайта Flavor Fit'
}

export default function HomePage() {
	return (
		<section className='flex items-start justify-between gap-4 px-6 py-6'>
			<div className='flex-1'>
				<div className='flex gap-2'>
					<div className='flex-none'>
						<h1 className='text-2xl'>
							Привет, <span className='font-bold'>Денис</span>
						</h1>
						<p className='text-secondary-foreground'>
							У вас сегодня 8 занятий
						</p>
					</div>
					<SearchInput isIcon isFilter className='col-span-5' />
				</div>

				<div className='flex items-start gap-4'>
					<Card className='h-dvw'>
						<CardContent>
							<div>Schedudule</div>
						</CardContent>
					</Card>
					<div className='flex flex-col'>
						<div className='flex gap-4'>
							<Card>
								<CardContent>
									<div>Report</div>
								</CardContent>
							</Card>
							<Card>
								<CardContent>
									<div>Shoping list</div>
								</CardContent>
							</Card>
						</div>
						<div className='flex'>
							<Card>
								<CardContent>
									<div>Daily intake</div>
								</CardContent>
							</Card>
							<Card>
								<CardContent>
									<div>Activity</div>
								</CardContent>
							</Card>
							<Card>
								<CardContent>
									<div>GotRecipe</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</div>
			<div>
				<Card className='flex-1'>
					<CardContent>
						<div>Recipe</div>
					</CardContent>
				</Card>
			</div>
		</section>
	)
}
