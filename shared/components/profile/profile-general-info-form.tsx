import { IdCard, Mail, User2 } from 'lucide-react'
import React from 'react'

import type { GetMeQuery } from '@/graphql/generated/graphql'

import {
	Button,
	Input,
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
	Textarea
} from '../ui'

interface Props {
	profileData: GetMeQuery | undefined
	loading: boolean
}

export const ProfileGeneralInfoForm: React.FC<Props> = ({
	profileData,
	loading
}) => {
	return (
		<>
			<div className='flex items-center justify-center gap-4 md:justify-start'>
				<div className='bg-accent-foreground rounded-full p-4'>
					<User2 className='text-primary-foreground' />
				</div>
				<div className='flex flex-col items-start gap-1'>
					<h3 className='text-muted-foreground font-bold'>
						Полное имя
					</h3>
					<div className='relative'>
						<Input
							type='text'
							placeholder={profileData?.getMe.fullName}
							className='rounded-full pl-10'
							disabled={loading}
						/>
						<IdCard className='text-muted-foreground absolute top-1.5 left-2.5 size-6' />
					</div>
				</div>
			</div>
			<div className='flex flex-col items-start gap-1'>
				<h3 className='text-muted-foreground font-bold'>Почта</h3>
				<div className='relative w-full'>
					<Input
						type='email'
						placeholder={profileData?.getMe.email}
						className='rounded-full pl-10'
						disabled={loading}
					/>
					<Mail className='text-muted-foreground absolute top-1.5 left-2.5' />
				</div>
			</div>
			<div className='flex items-center justify-between gap-4'>
				<div className='flex w-full flex-col items-start gap-1'>
					<h3 className='text-muted-foreground font-bold'>Ваш пол</h3>
					<Select
						defaultValue={profileData?.getMe.profile?.gender}
						disabled={loading}
					>
						<SelectTrigger className='w-full rounded-full'>
							<SelectValue
								placeholder={profileData?.getMe.profile?.gender}
							/>
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectItem value='MALE'>Мужской</SelectItem>
								<SelectItem value='FEMALE'>Женский</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
				<div className='flex w-full flex-col items-start gap-1'>
					<h3 className='text-muted-foreground font-bold'>
						Ваш возраст
					</h3>
					<Input
						type='number'
						placeholder={`${profileData?.getMe.profile?.age}`}
						className='rounded-full'
						disabled={loading}
					/>
				</div>
			</div>
			<div className='flex flex-col items-start gap-1'>
				<h3>Биография</h3>
				<Textarea
					className='h-20 resize-none rounded-2xl'
					placeholder={profileData?.getMe.profile?.bio || ''}
					disabled={loading}
				/>
			</div>
			<div>
				<h3>Сайты</h3>
				<div className='mb-4 flex flex-col gap-2'>
					{profileData?.getMe.profile?.sites &&
						profileData?.getMe.profile?.sites.map((site, index) => (
							<Input
								key={index}
								placeholder={site}
								className='rounded-full'
							/>
						))}
				</div>
				<Button className='rounded-full p-4' disabled={loading}>
					+ Добавить сайт
				</Button>
			</div>
		</>
	)
}
