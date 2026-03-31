'use client'

import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '../ui'

export const ChangeLanguageSelector = () => {
	const [language, setLanguage] = useState<string>('ru')
	const router = useRouter()

	useEffect(() => {
		const cookieLang = Cookies.get('locale')

		if (cookieLang) {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setLanguage(cookieLang)
		}
	}, [])

	const handleLanguageChange = (value: string) => {
		setLanguage(value)
		Cookies.set('locale', value, { expires: 365 })

		router.refresh()
	}

	return (
		<Select
			value={language}
			onValueChange={value => handleLanguageChange(value)}
		>
			<SelectTrigger className='cursor-pointer'>
				<SelectValue defaultValue='ru' placeholder='Русский' />
			</SelectTrigger>
			<SelectContent>
				<SelectItem
					className='focus:bg-foreground/50 cursor-pointer'
					value='ru'
				>
					Русский
				</SelectItem>
				<SelectItem
					className='focus:bg-foreground/50 cursor-pointer'
					value='en'
				>
					English
				</SelectItem>
			</SelectContent>
		</Select>
	)
}
