import { MessageCircle } from 'lucide-react'

import type { GetBySlugRecipeQuery } from '@/graphql/generated/graphql'

import { cn } from '@/shared/lib/utils'

import { Card, CardContent } from '../ui/card'

import { AddToCartButton } from './add-to-cart-button'
import { AddToFavoriteButton } from './add-to-favorite-button'
import { NutritionalFactsBlock } from './nutritional-facts-block'
import { RecipeAuthorBlock } from './recipe-author-block'
import { RecipeBadgesBlock } from './recipe-badges-block'
import { RecipeDescriptionBlock } from './recipe-description-block'
import { RecipeImage } from './recipe-image'
import { RecipeIngredientsBlock } from './recipe-ingredients-block'
import { RecipeStepsList } from './recipe-steps-list'
import { ShareRecipeButton } from './share-recipe-button'
import { useCommentsStore } from '@/shared/store/comments.store'

interface Props {
	recipe: GetBySlugRecipeQuery['getRecipeBySlug']
	className?: string
}

export const RecipeWithRecipeStep: React.FC<Props> = ({
	recipe,
	className
}) => {
	const { collapsed, setCollapsed } = useCommentsStore()

	return (
		<Card className={cn('w-full xl:h-[calc(100dvh-9rem)]', className)}>
			<CardContent className='flex flex-col gap-4'>
				<div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
					<RecipeImage imageUrl={recipe.imageUrl} />
					<div className='flex flex-col gap-4'>
						<div className='flex items-center justify-between'>
							<h1 className='text-3xl font-bold'>
								{recipe.title}
							</h1>
							<div className='flex items-center gap-3'>
								<ShareRecipeButton recipe={recipe} />
								<AddToCartButton />
								<AddToFavoriteButton
									isLiked={recipe.isLiked}
									recipeId={recipe.id}
								/>
								{collapsed && (
									<MessageCircle
										onClick={() => setCollapsed(!collapsed)}
										className='text-muted-foreground hidden size-6 cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 active:scale-95 lg:block'
									/>
								)}
							</div>
						</div>
						<div className='flex items-center justify-between gap-5'>
							{/* Badges */}
							<RecipeBadgesBlock
								calories={recipe.calories}
								cookingTime={recipe.cookingTime}
								difficulty={recipe.difficulty}
							/>
							{/* Author */}
							<RecipeAuthorBlock
								imageUrl={recipe.author.profile?.imageUrl || ''}
								email={recipe.author.email}
							/>
						</div>
						<div className='space-y-1'>
							{/* Description */}
							<h2 className='text-lg font-bold'>Описание:</h2>
							<RecipeDescriptionBlock
								description={recipe.description}
							/>
							{/* Tags */}
							<div className='flex items-center gap-2'>
								{recipe.tag.map(tag => (
									<span
										className='text-accent font-bold'
										key={tag.name}
									>
										#{tag.name}
									</span>
								))}
							</div>
						</div>

						{/* Nutrition facts */}
						<NutritionalFactsBlock
							carbohydrates={recipe.nutritionFact.carbohydrates}
							fats={recipe.nutritionFact.fats}
							fiber={recipe.nutritionFact.fiber}
							proteins={recipe.nutritionFact.proteins}
						/>
						{/* Ingredients */}
						<div className='flex flex-col gap-2'>
							<h2 className='text-lg font-bold'>Ингредиенты:</h2>
							<RecipeIngredientsBlock
								recipeIngredients={recipe.recipeIngredients}
							/>
						</div>
					</div>
				</div>
				{/*Recipe steps */}
				<RecipeStepsList steps={recipe.recipeStep} />
			</CardContent>
		</Card>
	)
}
