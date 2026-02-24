import { BellIcon } from 'lucide-react'

export const FILTERS_DATA = [
	{
		title: 'Meal Type',
		items: [
			{ name: 'Breakfast' },
			{ name: 'Lunch' },
			{ name: 'Dinner' },
			{ name: 'Snack' },
			{ name: 'Dessert' }
		],
		icon: BellIcon
	},
	{
		title: 'Dietary Preferences',
		items: [
			{ name: 'Vegan' },
			{ name: 'Vegetarian' },
			{ name: 'Gluten Free' },
			{ name: 'Dairy Free' },
			{ name: 'Egg Free' }
		],
		icon: BellIcon
	},
	{
		title: 'Heal Goals',
		items: [
			{ name: 'Weight Loss' },
			{ name: 'Weight Gain' },
			{ name: 'Muscle Gain' },
			{ name: 'Fat Loss' },
			{ name: 'Healthy Eating' }
		],
		icon: BellIcon
	},
	{
		title: 'Cuisine',
		items: [
			{ name: 'American' },
			{ name: 'Italian' },
			{ name: 'Mexican' },
			{ name: 'Indian' },
			{ name: 'Chinese' }
		],
		icon: BellIcon
	}
]
