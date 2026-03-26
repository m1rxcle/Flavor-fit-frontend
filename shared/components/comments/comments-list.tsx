import { MessageCircleDashed } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'

import type { GetAllCommentsFromRecipeQuery } from '@/graphql/generated/graphql'

import { cn } from '@/shared/lib/utils'

import { Comment } from './comment'
import { CommentsSkeleton } from './skeletons/comments-skeleton'

interface Props {
	comments:
		| GetAllCommentsFromRecipeQuery['getAllCommentsFromRecipe']
		| undefined
	loading?: boolean
	className?: string
}

export const CommentsList: React.FC<Props> = ({
	loading,
	comments,
	className
}) => {
	if (loading) {
		return <CommentsSkeleton />
	}

	if (!comments || comments.length === 0) {
		return (
			<div className='flex h-full flex-col items-center justify-center gap-4'>
				<MessageCircleDashed className='text-muted-foreground size-16' />
				<div className='mx-auto text-center'>
					<p className='text-accent text-lg font-semibold'>
						Еще нет комментариев
					</p>
					<span className='text-muted-foreground text-sm'>
						Будь первым кто оставит комментарий
					</span>
				</div>
			</div>
		)
	}

	return (
		<div className={cn('flex flex-col gap-4', className)}>
			<AnimatePresence initial={false}>
				{comments.map(comment => {
					return (
						<motion.div
							key={comment.id}
							exit={{ opacity: 0, x: -10 }}
							transition={{ duration: 0.2 }}
						>
							<Comment comment={comment} />
						</motion.div>
					)
				})}
			</AnimatePresence>
		</div>
	)
}
