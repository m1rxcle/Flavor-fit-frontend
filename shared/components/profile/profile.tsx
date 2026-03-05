'use client'

import { useMutation, useQuery } from '@apollo/client/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserRoundCog } from 'lucide-react'
import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import {
	GetFullProfileAtUserDocument,
	UpdateUserProfileDocument
} from '@/graphql/generated/graphql'

import {
	type TUpdateProfileSchema,
	UpdateProfileSchema
} from '@/shared/schemas/update-profile-schema'

import { Button, Card, CardContent } from '../ui'

import { BodyMeasurements } from './body-measurements'
import { GeneralInfo } from './general-info'

export const ProfileInfo = () => {
	const [updateProfile, { loading: isUpdateProfileLoading }] = useMutation(
		UpdateUserProfileDocument
	)

	const { data, loading: isGetProfileDataLoading } = useQuery(
		GetFullProfileAtUserDocument
	)

	const form = useForm<TUpdateProfileSchema>({
		resolver: zodResolver(UpdateProfileSchema),
		mode: 'onSubmit',
		defaultValues: {
			profile: {
				fullName: '',
				email: '',
				imageUrl: '',
				gender: undefined,
				age: '',
				bio: '',
				sites: []
			},
			measurements: {
				growth: '',
				currentWeight: '',
				desiredWeight: '',
				waistCircumference: '',
				chestWeight: '',
				thighCircumference: '',
				armCircumference: '',
				nutritionalGoals: undefined,
				activityLevel: undefined
			}
		}
	})

	useEffect(() => {
		if (!data?.getMe) return

		const user = data.getMe

		form.reset({
			profile: {
				fullName: user.profile?.fullName ?? '',
				email: user.email ?? '',
				imageUrl: user.profile?.imageUrl ?? null,
				gender: user.profile?.gender,
				age: user.profile?.age?.toString() ?? '',
				bio: user.profile?.bio ?? '',
				sites: user.profile?.sites ?? []
			},
			measurements: {
				growth: user.measurements?.heightCm ?? '',
				currentWeight: user.measurements?.weightKg ?? '',
				desiredWeight: user.measurements?.goalWeightKg ?? '',
				waistCircumference: user.measurements?.waistCm ?? '',
				chestWeight: user.measurements?.chestCm ?? '',
				thighCircumference: user.measurements?.thighCm ?? '',
				armCircumference: user.measurements?.armCm ?? '',
				nutritionalGoals:
					user.measurements?.nutritionalGoal ?? undefined,
				activityLevel: user.measurements?.activityLevel ?? undefined
			}
		})
	}, [data, form])

	const handleSubmitForm = async (data: TUpdateProfileSchema) => {
		try {
			await updateProfile({
				variables: {
					data: {
						email: data.profile.email || undefined,
						fullName: data.profile.fullName || undefined,
						profile: {
							fullName: data.profile.fullName || undefined,
							age: data.profile.age
								? +data.profile.age
								: undefined,
							bio: data.profile.bio || undefined,
							gender: data.profile.gender || undefined,
							imageUrl: data.profile.imageUrl || undefined,
							sites: data.profile.sites?.length
								? data.profile.sites
								: undefined
						},
						measurements: {
							activityLevel:
								data.measurements.activityLevel || undefined,
							armCm:
								data.measurements.armCircumference || undefined,
							chestCm: data.measurements.chestWeight || undefined,
							goalWeightKg:
								data.measurements.desiredWeight || undefined,
							heightCm: data.measurements.growth || undefined,
							nutritionalGoal:
								data.measurements.nutritionalGoals || undefined,
							thighCm:
								data.measurements.thighCircumference ||
								undefined,
							weightKg:
								data.measurements.currentWeight || undefined,
							waistCm:
								data.measurements.waistCircumference ||
								undefined
						}
					}
				}
			})

			toast.success('Данные успешно обновлены!')
			resetForm()
		} catch (error) {
			if (error instanceof Error && error.message) {
				toast.error(error.message)
				console.error(error.message)
			}
			console.error(error)
		}
	}

	const resetForm = () => {
		form.reset()
	}

	return (
		<section>
			<Card>
				<FormProvider {...form}>
					<form onSubmit={form.handleSubmit(handleSubmitForm)}>
						<CardContent className='space-y-6'>
							<div className='flex items-center justify-between'>
								<div className='flex items-center gap-2'>
									<UserRoundCog className='text-muted-foreground hidden size-6 lg:block' />
									<h1 className='text-2xl font-bold'>
										Персональные данные
									</h1>
								</div>
								<div className='flex items-center gap-2'>
									<Button
										onClick={e => {
											e.preventDefault()
											resetForm()
										}}
										variant='outline'
										className='rounded-2xl border-2 font-semibold hover:bg-transparent'
									>
										Отмена
									</Button>
									<Button
										type='submit'
										className='bg-button-background text-primary hover:bg-button-background/80 rounded-2xl font-bold'
									>
										Сохранить{' '}
									</Button>
								</div>
							</div>
							<div className='flex flex-col gap-4 lg:flex-row'>
								<GeneralInfo
									updateProfileData={data?.getMe}
									isUpdateLoading={isUpdateProfileLoading}
									isGetProfileLoading={
										isGetProfileDataLoading
									}
								/>
								<BodyMeasurements
									updateMeasurementsData={data?.getMe}
									isUpdateProfileLoading={
										isUpdateProfileLoading
									}
									isGetProfileLoading={
										isGetProfileDataLoading
									}
								/>
							</div>
						</CardContent>
					</form>
				</FormProvider>
			</Card>
		</section>
	)
}
