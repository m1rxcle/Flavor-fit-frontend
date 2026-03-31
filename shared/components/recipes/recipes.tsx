'use client'

import { useQuery } from '@apollo/client/react'
import { useQueryState } from 'nuqs'
import { useState } from 'react'

import {
	SearchRecipeDocument,
	SortRecipeDocument
} from '@/graphql/generated/graphql'

import { CreateRecipeCard } from '@/shared/components/recipes/create-recipe-card'
import { RecipesList } from '@/shared/components/recipes/recipes-list'
import { TotalCreatedRecipes } from '@/shared/components/recipes/total-create-recipes'

import { SearchInput } from '../kit'

import { RecipesSidebar } from './recipes-sidebar'
import { useDebounce } from '@/shared/hooks'

export const Recipes = () => {
	const [limit, setLimit] = useState<number>(10)

	const [searchTerm, setSearchTerm] = useQueryState('s', { defaultValue: '' })

	const debouncedSearch = useDebounce(searchTerm, 500)

	const {
		data: recipeFromSearch,
		loading: isRecipeSearchLoading,
		error: isRecipeSearchError
	} = useQuery(SearchRecipeDocument, {
		variables: {
			searchTerm: debouncedSearch
		},
		skip: !debouncedSearch,
		fetchPolicy: 'cache-and-network'
	})

	const { data: popularRecipes, loading: isPopularRecipesLoading } = useQuery(
		SortRecipeDocument,
		{
			variables: {
				sortBy: 'POPULARITY',
				take: limit,
				offset: 0
			},
			notifyOnNetworkStatusChange: true
		}
	)

	const { data: recommendedRecipes, loading: isRecommendedRecipesLoading } =
		useQuery(SortRecipeDocument, {
			variables: {
				sortBy: 'RECOMMENDED',
				take: limit,
				offset: 0
			}
		})

	const isSearching = debouncedSearch.trim().length > 0

	const searchedRecipes = isSearching
		? (recipeFromSearch?.searchRecipes ?? [])
		: []

	const popularRecipesList = popularRecipes?.sortRecipes ?? []
	const recommendedRecipesList = recommendedRecipes?.sortRecipes ?? []

	return (
		<section className='flex flex-col justify-center gap-6 px-6 py-6 md:flex-row'>
			{/* Search and filters */}
			<RecipesSidebar setSearchTerm={setSearchTerm} />

			<div className='flex min-w-0 flex-col gap-6 md:flex-1'>
				{/* ad and total created */}
				<div className='flex flex-col gap-6 lg:mb-6 lg:flex-row lg:flex-wrap'>
					<CreateRecipeCard />
					<TotalCreatedRecipes />
				</div>
				<div className='md:hidden'>
					<SearchInput
						onChange={e => {
							e.preventDefault()
							setSearchTerm(e.target.value)
						}}
						isIcon
						className='md:hidden'
					/>
				</div>
				{/* recipe list */}
				<RecipesList
					isSearching={isSearching}
					searchedRecipes={searchedRecipes}
					popularRecipes={popularRecipesList}
					recommendedRecipes={recommendedRecipesList}
					isLoadingSearch={isRecipeSearchLoading}
					errorSearch={isRecipeSearchError}
					isLoadingPopular={isPopularRecipesLoading}
					isLoadingRecommended={isRecommendedRecipesLoading}
				/>
			</div>
		</section>
	)
}
