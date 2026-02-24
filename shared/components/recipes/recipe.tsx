'use client'

import { useQuery } from '@apollo/client/react'
import { useSearchParams } from 'next/navigation'

import { GetBySlugRecipeDocument } from '@/graphql/generated/graphql'

import { Card, CardContent } from '../ui/card'

import { useAuthStore } from '@/shared/store/auth.store'

export const Recipe = () => {
	const searchParams = useSearchParams()
	const { user, accessToken } = useAuthStore()

	console.log(user?.fullName, user?.email, accessToken)

	const { data, loading, error } = useQuery(GetBySlugRecipeDocument, {
		variables: {
			slug: searchParams.get('s') as string
		}
	})

	console.log(data?.getRecipeBySlug.title)

	return (
		<section className='px-6 py-6'>
			<Card>
				<CardContent>
					{loading ? (
						'Loading...'
					) : (
						<>
							<div>
								<p>Рецепт от {user?.fullName}</p>
							</div>
							<h1>{data?.getRecipeBySlug.title}</h1>
							<p>{data?.getRecipeBySlug.description}</p>
						</>
					)}
				</CardContent>
			</Card>
		</section>
	)
}
