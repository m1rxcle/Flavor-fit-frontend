import { Settings } from 'lucide-react'
import type { Metadata } from 'next'

import { SearchInput } from '@/shared/components/kit/search-input'
import { CreateRecipeCard } from '@/shared/components/recipes/create-recipe-card'
import { InlineFiltersList } from '@/shared/components/recipes/inline-filters-list'
import { RecipesList } from '@/shared/components/recipes/recipes-list'
import { TotalCreatedRecipes } from '@/shared/components/recipes/total-create-recipes'
import { Card, CardContent } from '@/shared/components/ui/card'

export const metadata: Metadata = {
	title: 'Рецепты | Flavor Fit',
	description: 'Рецепты вкусных блюд и закусок Flavor Fit'
}

export default function RecipesPage() {
	return (
		<section className='flex flex-col justify-center gap-6 px-6 py-6 md:flex-row'>
			{/* Search and filters */}
			<aside className='md:w-72 md:shrink-0'>
				<div className='sticky top-0'>
					<Card>
						<CardContent>
							<div className='hidden md:flex md:flex-col md:space-y-4'>
								<SearchInput isIcon isFilter />
								<InlineFiltersList />
							</div>
							<div className='flex items-center justify-between gap-2 md:hidden'>
								<h1 className='text-lg font-bold'>Фильтры</h1>
								<Settings className='text-muted-foreground' />
							</div>
						</CardContent>
					</Card>
				</div>
			</aside>

			<div className='flex min-w-0 flex-col gap-6 md:flex-1'>
				{/* ad and total created */}
				<div className='flex flex-col gap-6 lg:mb-6 lg:flex-row'>
					<CreateRecipeCard />

					<TotalCreatedRecipes />
				</div>

				{/* recipe list */}
				<RecipesList />
			</div>
		</section>
	)
}
