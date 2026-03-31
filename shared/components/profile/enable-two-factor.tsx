'use client'

import { useMutation, useQuery } from '@apollo/client/react'
import { Shield } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

import {
	Disable2FaDocument,
	Enable2FaDocument,
	GetFullProfileAtUserDocument
} from '@/graphql/generated/graphql'

import { Switch } from '../ui'

export const EnableTwoFactor = () => {
	const { data } = useQuery(GetFullProfileAtUserDocument)

	const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(
		data?.getMe?.isTwoFactorEnabled
	)

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setIsTwoFactorEnabled(data?.getMe?.isTwoFactorEnabled)
	}, [data])

	const [enable2fa, { loading: isEnabling }] = useMutation(Enable2FaDocument)
	const [disable2fa, { loading: isDisabling }] =
		useMutation(Disable2FaDocument)

	const t = useTranslations('settings.twoFactor')

	return (
		<div className='flex flex-col justify-between gap-4'>
			<div className='space-y-2'>
				<div className='flex items-center gap-2'>
					<Shield className='text-muted-foreground' />
					<h1 className='text-2xl font-bold'>{t('title')}</h1>
				</div>
				<p className='text-muted-foreground'>{t('description')}</p>
			</div>
			<Switch
				size='max'
				disabled={isEnabling || isDisabling}
				className='cursor-pointer'
				checked={isTwoFactorEnabled}
				onCheckedChange={async checked => {
					setIsTwoFactorEnabled(checked)
					try {
						if (checked) {
							await enable2fa()
							toast.success(
								'Двухфакторная аутентификация включена!',
								{ id: 'enable-2fa-success' }
							)
						} else {
							await disable2fa()
							toast.info(
								'Двухфакторная аутентификация отключена!',
								{ id: 'disable-2fa-success' }
							)
						}
					} catch (error) {
						setIsTwoFactorEnabled(!checked)

						toast.error(
							error instanceof Error
								? error.message
								: 'Что-то пошло не так!',
							{ id: 'enable-2fa-error' }
						)
					}
				}}
			/>
		</div>
	)
}
