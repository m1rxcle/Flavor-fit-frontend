import type { ErrorLike } from '@apollo/client'
import { Album, BookHeart, Loader2, Search } from 'lucide-react'
import 'swiper/css'
import { Mousewheel } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import {
	type SearchRecipeQuery,
	type SortRecipeQuery
} from '@/graphql/generated/graphql'

import { RecipeCard } from './recipe/recipe-card'
import { RecipeListSkeleton } from './skeletons'

interface Props {
	isSearching?: boolean
	searchedRecipes?: SearchRecipeQuery['searchRecipes'] | undefined
	popularRecipes?: SortRecipeQuery['sortRecipes'] | undefined
	recommendedRecipes?: SortRecipeQuery['sortRecipes'] | undefined
	isLoadingSearch?: boolean
	isLoadingPopular?: boolean
	isLoadingRecommended?: boolean
	errorSearch?: ErrorLike | undefined
}

export const RecipesList = ({
	isSearching,
	searchedRecipes,
	popularRecipes,
	recommendedRecipes,
	isLoadingSearch,
	isLoadingPopular,
	isLoadingRecommended,
	errorSearch
}: Props) => {
	const hasSearched = searchedRecipes && searchedRecipes.length > 0
	const hasPopular = popularRecipes && popularRecipes.length > 0
	const hasRecommended = recommendedRecipes && recommendedRecipes.length > 0

	if (errorSearch) {
		return (
			<section className='flex items-center gap-2'>
				<h1 className='text-2xl font-bold'>
					Произошла ошибка при загрузке рецептов
				</h1>
			</section>
		)
	}

	if (isLoadingSearch || isLoadingPopular || isLoadingRecommended) {
		return isSearching ? (
			<Loader2 className='text-muted-foreground size-10 animate-spin' />
		) : (
			<RecipeListSkeleton />
		)
	}

	if (isSearching && searchedRecipes?.length === 0) {
		return (
			<section className='flex items-center gap-2'>
				<Search className='text-muted-foreground size-6' />
				<h1 className='text-2xl font-bold'>
					Мы не нашли ничего по вашему запросу
				</h1>
			</section>
		)
	}

	if (!hasSearched && !hasPopular && !hasRecommended) {
		return (
			<section className='flex items-center gap-2'>
				<BookHeart className='text-muted-foreground size-6' />
				<h1 className='text-2xl font-bold'>У вас нет рецептов</h1>
			</section>
		)
	}

	return (
		<section className='flex flex-col gap-5'>
			{hasSearched && isSearching ? (
				<div>
					<div className='mb-3 flex items-center gap-2'>
						<Search className='text-muted-foreground size-6' />
						<h1 className='text-2xl font-bold'>
							Рецепты по вашему запросу: {searchedRecipes.length}
						</h1>
					</div>
					<div className='flex flex-col gap-4 md:flex-row md:flex-wrap'>
						{searchedRecipes.map(recipe => {
							return (
								<RecipeCard
									className='w-full md:w-76'
									key={recipe.id}
									recipe={recipe}
								/>
							)
						})}
					</div>
				</div>
			) : (
				hasPopular &&
				hasRecommended &&
				!isSearching && (
					<>
						<div>
							<div className='mb-3 flex items-center gap-2'>
								<BookHeart className='text-muted-foreground size-6' />
								<h1 className='text-2xl font-bold'>
									Популярные рецепты
								</h1>
							</div>
							<Swiper
								modules={[Mousewheel]}
								direction='horizontal'
								mousewheel={{
									enabled: true,
									releaseOnEdges: true
								}}
								slidesPerView={'auto'}
								spaceBetween={20}
							>
								{popularRecipes.map(recipe => {
									return (
										<SwiperSlide
											className='w-auto! cursor-default py-6'
											key={recipe.id}
										>
											<RecipeCard recipe={recipe} />
										</SwiperSlide>
									)
								})}
							</Swiper>
						</div>
						<div>
							<div className='mb-3 flex items-center gap-2'>
								<Album className='text-muted-foreground size-6' />
								<h2 className='text-2xl font-bold'>
									Интересные рецепты
								</h2>
							</div>
							<Swiper
								modules={[Mousewheel]}
								direction='horizontal'
								mousewheel={{
									enabled: true,
									releaseOnEdges: true
								}}
								slidesPerView={'auto'}
								spaceBetween={20}
							>
								{recommendedRecipes.map(recipe => {
									return (
										<SwiperSlide
											key={recipe.id}
											className='w-auto! cursor-default py-6'
										>
											<RecipeCard recipe={recipe} />
										</SwiperSlide>
									)
								})}
							</Swiper>
						</div>
					</>
				)
			)}
		</section>
	)
}
