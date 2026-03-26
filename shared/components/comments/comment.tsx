'use client'

import { useMutation } from '@apollo/client/react'
import { User2 } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

import {
	DeleteCommentDocument,
	type GetAllCommentsFromRecipeQuery
} from '@/graphql/generated/graphql'

import { cn } from '@/shared/lib/utils'

import { convertDate } from '@/shared/utils'

import { Card, CardContent } from '../ui'

import { CommentActions } from './comment-actions'
import { useAuthStore } from '@/shared/store/auth.store'

interface Props {
	comment: GetAllCommentsFromRecipeQuery['getAllCommentsFromRecipe'][number]
	className?: string
}

export const Comment: React.FC<Props> = ({ comment, className }) => {
	const [showActions, setShowActions] = useState(false)

	const { user } = useAuthStore()

	const [deleteComment] = useMutation(DeleteCommentDocument)

	const isAuthor = comment.authorId === user?.id
	const isAdmin = user?.role === 'ADMIN'

	const ableToShowActions = isAuthor || isAdmin

	return (
		<Card className={cn('w-full md:w-70', className)}>
			<CardContent>
				<div className='flex flex-col gap-2'>
					<div className='flex items-center justify-between gap-2'>
						<div className='flex items-center gap-2'>
							{comment.author?.profile?.imageUrl ? (
								<Image
									className='h-8 w-8 rounded-full'
									src={
										comment.author?.profile?.imageUrl || '/'
									}
									alt={
										comment.author?.profile?.fullName || '/'
									}
									width={32}
									height={32}
								/>
							) : (
								<div className='bg-foreground rounded-full p-1'>
									<User2 className='text-primary-foreground' />
								</div>
							)}
							<span className='text-base font-semibold'>
								{comment.author?.profile?.fullName}
							</span>
						</div>
						<CommentActions
							comment={comment}
							ableToShowActions={ableToShowActions}
							showActions={showActions}
							setShowActions={setShowActions}
							deleteComment={deleteComment}
						/>
					</div>
					<div className='flex flex-col gap-2'>
						<span>{comment.content}</span>
						<span className='text-muted-foreground text-xs'>
							{convertDate(comment.createdAt)}
						</span>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}
