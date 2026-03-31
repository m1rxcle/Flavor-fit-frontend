import { ArrowLeft, ArrowRight, CookingPot } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Mousewheel, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import type { GetBySlugRecipeQuery } from '@/graphql/generated/graphql'

import { cn } from '@/shared/lib/utils'

import { Button } from '../../ui'

interface Props {
	steps: GetBySlugRecipeQuery['getRecipeBySlug']['recipeStep']
	className?: string
}

export const RecipeStepsList: React.FC<Props> = ({ steps, className }) => {
	if (!steps) return null

	//TODO: add REAL img

	return (
		<div className={cn('flex flex-col gap-4', className)}>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-2'>
					<CookingPot />
					<h1 className='text-lg font-bold md:text-xl'>
						Пошаговая инструкция к приготовлению:
					</h1>
				</div>
				<div className='flex items-center'>
					<Button variant='link' className='prev-btn'>
						<ArrowLeft />
					</Button>
					<Button variant='link' className='next-btn'>
						<ArrowRight />
					</Button>
				</div>
			</div>
			<div className='flex items-center gap-4'>
				<Swiper
					modules={[Mousewheel, Navigation]}
					navigation={{
						nextEl: '.next-btn',
						prevEl: '.prev-btn'
					}}
					direction='horizontal'
					mousewheel
					slidesPerView={'auto'}
					spaceBetween={20}
					className='m-0!'
				>
					{steps.map(step => (
						<SwiperSlide className='w-auto!' key={step.id}>
							<Image
								src={'/images/auth/desktop/helper.jpg'}
								alt='recipe-step-img'
								className='h-auto w-auto rounded-4xl object-cover'
								width={350}
								height={350}
							/>

							<div className='mt-2 flex flex-col'>
								<span className='font-semibold'>
									Шаг {step.order} из {steps.length}
								</span>
								<h2 className='text-lg font-bold'>
									{step.title}
								</h2>
								<p className='text-muted-foreground'>
									{step.description}
								</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)
}
