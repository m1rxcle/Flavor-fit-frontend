import { Book, BookAlert, History, Settings, User } from 'lucide-react'

export const PROFILE_MENU = [
	{
		title: 'Персональные данные',
		href: '/profile',
		icon: User
	},

	{
		title: 'Избранные рецепты',
		href: '/profile/favorites',
		icon: Book
	},

	{
		title: 'История заказов',
		href: '/profile/orders',
		icon: History
	},

	{
		title: 'Мои рецепты',
		href: '/profile/my-recipes',
		icon: BookAlert
	},
	{
		title: 'Настройки',
		href: '/profile/settings',
		icon: Settings
	}
]
