'use client'

import { useMutation, useQuery } from '@apollo/client/react'
import { UserRoundCog } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { GetMeDocument, LogOutDocument } from '@/graphql/generated/graphql'

import { Button, Card, CardContent, CardHeader } from '../ui'

import { ProfileGeneralInfoForm } from './profile-general-info-form'

export const Profile = () => {
	const router = useRouter()

	const [logout, { loading: isLogoutLoading }] = useMutation(LogOutDocument)
	const { data: profileData, loading: isProfileLoading } =
		useQuery(GetMeDocument)

	const handleLogout = async () => {
		try {
			await logout()
			router.push('/login')
			toast.success('Вы успешно вышли из системы!')
		} catch (error) {
			if (error instanceof Error && error.message) {
				toast.error(error.message)
			}
		}
	}

	//TODO: Profile Image

	return (
		<section className='px-6 py-6'>
			<Card>
				<CardContent className='space-y-6'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center gap-2'>
							<UserRoundCog className='text-muted-foreground size-6' />
							<h1 className='text-2xl font-bold'>
								Персональные данные
							</h1>
						</div>
						<Button
							className='bg-button-background hover:bg-button-background/80 cursor-pointer rounded-xl transition-all duration-300 ease-in-out active:scale-98'
							onClick={handleLogout}
							disabled={isLogoutLoading}
						>
							<span className='text-foreground text-lg font-bold'>
								Выйти
							</span>
						</Button>
					</div>
					<div>
						<Card>
							<CardHeader>
								<h2 className='text-xl font-bold'>
									Основная информация
								</h2>
							</CardHeader>
							<CardContent className='space-y-4'>
								<ProfileGeneralInfoForm
									profileData={profileData}
									loading={isProfileLoading}
								/>
							</CardContent>
						</Card>
					</div>
				</CardContent>
			</Card>
		</section>
	)
}
