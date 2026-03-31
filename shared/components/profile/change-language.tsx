import { Languages } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { ChangeLanguageSelector } from './change-language-selector'

export const ChangeLanguage = () => {
	const t = useTranslations('settings.changeLanguage')

	return (
		<div className='flex flex-col gap-4'>
			<div className='space-y-2'>
				<div className='flex items-center gap-2'>
					<Languages className='text-muted-foreground' />
					<h1 className='text-2xl font-bold'>{t('title')}</h1>
				</div>
				<p className='text-muted-foreground'>{t('description')}</p>
			</div>
			<ChangeLanguageSelector />
		</div>
	)
}
