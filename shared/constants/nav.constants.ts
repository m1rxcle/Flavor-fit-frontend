import {
	CalendarDaysIcon,
	ChartLineIcon,
	HomeIcon,
	NotebookIcon,
	StoreIcon,
	UtensilsIcon
} from 'lucide-react'

export const NAV_ITEMS = [
	{
		title: 'Главная',
		href: '/',
		icon: HomeIcon
	},
	{
		title: 'План питания',
		href: '/meal-plans',
		icon: CalendarDaysIcon
	},
	{
		title: 'Питание',
		href: '/nutrition',
		icon: UtensilsIcon
	},
	{
		title: 'Аналитика',
		href: '/analytics',
		icon: ChartLineIcon
	},
	{
		title: 'Заказы',
		href: '/order-groceries',
		icon: StoreIcon
	},
	{
		title: 'Рецепты',
		href: '/recipes',
		icon: NotebookIcon
	}
]
