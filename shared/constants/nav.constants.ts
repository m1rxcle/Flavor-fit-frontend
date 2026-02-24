import {
	CalendarDaysIcon,
	ChartLineIcon,
	HomeIcon,
	NotebookIcon,
	StoreIcon,
	UsersIcon,
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
		title: 'Заказ продуктов',
		href: '/order-groceries',
		icon: StoreIcon
	},
	{
		title: 'Рецепты',
		href: '/recipes',
		icon: NotebookIcon
	},
	{
		title: 'Форум',
		href: '/forum',
		icon: UsersIcon
	}
]
