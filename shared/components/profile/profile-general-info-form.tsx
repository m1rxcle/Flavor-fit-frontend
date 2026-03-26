import { IdCard, Mail, VenusAndMars, Verified } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

import type { GetFullProfileAtUserQuery } from '@/graphql/generated/graphql'

import type { TUpdateProfileSchema } from '@/shared/schemas'

import { CustomFormInput } from '../kit'
import {
	Button,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input
} from '../ui'

import { AvatarUpload } from './avatar-upload'

interface Props {
	profileData: GetFullProfileAtUserQuery['getMe'] | undefined
	isUpdateLoading: boolean
}

export const ProfileGeneralInfoForm: React.FC<Props> = ({
	profileData,
	isUpdateLoading
}) => {
	const form = useFormContext<TUpdateProfileSchema>()

	return (
		<>
			<div className='flex items-center justify-center gap-4 md:justify-start'>
				<FormField
					control={form.control}
					name='profile.imageUrl'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<AvatarUpload
									value={field.value}
									onChange={field.onChange}
								/>
							</FormControl>
						</FormItem>
					)}
				/>

				<CustomFormInput
					name='profile.fullName'
					content='input'
					label='Полное имя'
					contentId='fullName'
					type='text'
					placeholder='Ваше имя'
					Icon={IdCard}
					formControl={form.control}
				/>
			</div>

			<CustomFormInput
				name='profile.email'
				content='input'
				label='Почта'
				contentId='profile.email'
				type='text'
				placeholder='Ваше почта'
				Icon={Mail}
				formControl={form.control}
				IconRight={Verified}
				className='cursor-not-allowed'
				loading
				IconRightClassName='text-emerald-500'
			/>

			<div className='flex items-center justify-between gap-4'>
				<CustomFormInput
					name='profile.gender'
					formControl={form.control}
					label='Ваш пол'
					contentId='gender'
					content='select'
					selectOptions={[
						{
							label: 'Выберите ваш пол',
							value: ''
						},
						{ label: 'Мужской', value: 'MALE' },
						{ label: 'Женский', value: 'FEMALE' }
					]}
					Icon={VenusAndMars}
					className='pl-10'
					loading={isUpdateLoading}
					placeholder='Выберите ваш пол'
				/>

				<CustomFormInput
					name='profile.age'
					label='Ваш возраст'
					content='input'
					contentId='profile.age'
					type='number'
					placeholder='Введите ваш возраст'
					formControl={form.control}
					loading={isUpdateLoading}
					className='pl-3'
					contentSpanValue='лет'
					contentSpanClassName='left-9'
				/>
			</div>

			<CustomFormInput
				name='profile.bio'
				label='Био'
				content='textarea'
				contentId='profile.bio'
				placeholder='Расскажите всем о себе...'
				formControl={form.control}
				loading={isUpdateLoading}
				className='pl-3'
			/>
			<FormField
				name='profile.sites'
				control={form.control}
				render={({ field }) => (
					<FormItem>
						<FormLabel htmlFor='sites'>
							<h3 className='text-muted-foreground'>Сайты</h3>
						</FormLabel>
						<FormControl className='mb-4 flex flex-col gap-2'>
							{profileData?.profile?.sites &&
								profileData?.profile?.sites.map(
									(site, index) => (
										<Input
											id={`sites.${index}`}
											key={index}
											placeholder={site}
											className='rounded-full text-sm font-semibold md:text-base'
											{...field}
										/>
									)
								)}
						</FormControl>
						<FormMessage />

						<Button
							className='bg-accent hover:bg-accent/80 rounded-full p-4'
							disabled={isUpdateLoading}
						>
							+ Добавить сайт
						</Button>
					</FormItem>
				)}
			/>
		</>
	)
}
