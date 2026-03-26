import { Settings } from 'lucide-react'

import { Card, CardContent, CardHeader } from '../ui'

import { ChangeEmailForm } from './change-email-form'
import { ChangePasswordForm } from './change-password-form'
import { EnableTwoFactor } from './enable-two-factor'

export const SettingsPage = () => {
	return (
		<Card>
			<CardHeader className='flex items-center gap-2'>
				<Settings className='text-muted-foreground' />
				<h2 className='text-xl font-bold'>Настройки</h2>
			</CardHeader>
			<CardContent className='grid grid-cols-1 gap-10 xl:grid-cols-2'>
				<ChangeEmailForm />
				<ChangePasswordForm />
				<EnableTwoFactor />
			</CardContent>
		</Card>
	)
}
