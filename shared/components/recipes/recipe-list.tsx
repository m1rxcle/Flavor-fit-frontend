'use client'

import { useQuery } from '@apollo/client/react'
import { Album, BookHeart } from 'lucide-react'
import 'swiper/css'
import { Mousewheel } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { GetAllRecipesDocument } from '@/graphql/generated/graphql'

import { RecipeCard } from './recipe-card'
import { RecipeListSkeleton } from './skeletons'

interface Props {
	limit?: number
}

export const RecipeList = ({ limit }: Props) => {
	const { data, loading, error } = useQuery(GetAllRecipesDocument, {
		variables: {
			data: limit ?? 10
		}
	})

	if (loading) {
		return <RecipeListSkeleton />
	}

	if (error) {
		return (
			<div className='text-center text-red-500'>
				Ошибка загрузки рецептов
			</div>
		)
	}

	if (!data?.getAllRecipes.length) {
		return (
			<section className='flex items-center gap-2'>
				<BookHeart className='text-muted-foreground size-6' />
				<h1 className='text-2xl font-bold'>У вас нет рецептов</h1>
			</section>
		)
	}

	return (
		<section className='flex flex-col gap-5'>
			<div>
				<div className='mb-3 flex items-center gap-2'>
					<BookHeart className='text-muted-foreground size-6' />
					<h1 className='text-2xl font-bold'>Популярные рецепты</h1>
				</div>
				<Swiper
					modules={[Mousewheel]}
					direction='horizontal'
					mousewheel={{
						enabled: true,
						releaseOnEdges: true
					}}
					slidesPerView={'auto'}
					spaceBetween={10}
				>
					{data.getAllRecipes.map(recipe => {
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
					<h2 className='text-2xl font-bold'>Интересные рецепты</h2>
				</div>
				<Swiper
					modules={[Mousewheel]}
					direction='horizontal'
					mousewheel={{
						enabled: true,
						releaseOnEdges: true
					}}
					slidesPerView={'auto'}
					spaceBetween={10}
				>
					{data.getAllRecipes.map(recipe => {
						return (
							<SwiperSlide
								key={recipe.id}
								className='w-auto! cursor-default'
							>
								<RecipeCard recipe={recipe} />
							</SwiperSlide>
						)
					})}
				</Swiper>
			</div>
		</section>
	)
}
