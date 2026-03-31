import { Settings } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Card, CardContent, CardHeader } from '../../ui'
import { ChangeEmailForm } from '../change-email-form'
import { ChangeLanguage } from '../change-language'
import { ChangePasswordForm } from '../change-password-form'
import { EnableTwoFactor } from '../enable-two-factor'

export const SettingsPage = () => {
	const t = useTranslations('settings')

	return (
		<Card>
			<CardHeader className='flex items-center gap-2'>
				<Settings className='text-muted-foreground' />
				<h2 className='text-xl font-bold'>{t('title')}</h2>
			</CardHeader>
			<CardContent className='grid grid-cols-1 gap-10 xl:grid-cols-2'>
				<ChangeEmailForm />
				<ChangePasswordForm />
				<EnableTwoFactor />
				<ChangeLanguage />
			</CardContent>
		</Card>
	)
}
