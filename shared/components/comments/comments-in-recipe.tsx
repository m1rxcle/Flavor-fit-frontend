import { useQuery } from '@apollo/client/react'
import { ArrowLeft, MessageCircleMore } from 'lucide-react'

import { GetAllCommentsFromRecipeDocument } from '@/graphql/generated/graphql'

import { cn } from '@/shared/lib/utils'

import { LikeBadge, ViewBadge } from '../recipes/badges'
import { Card, CardContent, CardHeader } from '../ui/card'

import { AddCommentForm } from './add-comment-form'
import { CommentsList } from './comments-list'
import { useCommentsStore } from '@/shared/store/comments.store'

interface Props {
	recipeId: string
	totalLikes: number | undefined
	totalViews: number | undefined

	className?: string
}

export const CommentsInRecipe = ({
	totalLikes,
	totalViews,
	recipeId,
	className
}: Props) => {
	const { data: comments, loading } = useQuery(
		GetAllCommentsFromRecipeDocument,
		{
			variables: { recipeId }
		}
	)

	const { collapsed, setCollapsed } = useCommentsStore()

	return (
		<Card
			className={cn(
				'overflow-hidden transition-all duration-300 ease-in-out',
				collapsed
					? 'pointer-events-none max-w-0 translate-x-2 opacity-0'
					: 'max-h-[calc(50vh)] max-w-full translate-x-0 opacity-100 xl:max-h-[calc(100dvh-9rem)]',
				className
			)}
		>
			<CardHeader>
				<div className='flex flex-col items-center'>
					<div className='flex items-center gap-2'>
						{!collapsed && (
							<>
								<ArrowLeft
									onClick={() => setCollapsed(!collapsed)}
									className='text-muted-foreground mr-3 hidden size-6 cursor-pointer lg:block'
								/>
							</>
						)}

						<MessageCircleMore className='text-muted-foreground size-6' />
						<h1 className='text-primary text-xl font-bold'>
							Комментарии
						</h1>
						{comments ? (
							<span className='bg-primary/20 rounded-md px-3 py-1'>
								{comments?.getAllCommentsFromRecipe.length}
							</span>
						) : null}
					</div>
					<div className='flex items-center gap-4'>
						<div>
							<LikeBadge likes={totalLikes} />
						</div>
						<div>
							<ViewBadge views={totalViews} />
						</div>
					</div>
				</div>
			</CardHeader>
			<CardContent className={cn('flex min-h-0 flex-1 flex-col gap-4')}>
				<div className='min-h-0 flex-1 overflow-x-hidden overflow-y-auto p-2'>
					<CommentsList
						loading={loading}
						comments={comments?.getAllCommentsFromRecipe}
					/>
				</div>
				<div className='shrink-0'>
					<AddCommentForm recipeId={recipeId} />
				</div>
			</CardContent>
		</Card>
	)
}
