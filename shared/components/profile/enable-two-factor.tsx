'use client'

import { useMutation, useQuery } from '@apollo/client/react'
import { Shield } from 'lucide-react'
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

	return (
		<div className='flex flex-col gap-4'>
			<div>
				<h1 className='flex items-center gap-2 text-2xl font-bold'>
					<Shield className='text-muted-foreground' />
					Включите двухфакторную аутентификацию
				</h1>
				<p className='text-muted-foreground'>
					При включенном двухфакторной аутентификации вы будете
					получать код на почту всякий раз когда будете пытаться войти
					в аккаунт, тем самым увеличивая безопасность
				</p>
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
