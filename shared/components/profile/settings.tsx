import { Settings } from 'lucide-react'

import { Card, CardHeader } from '../ui'

export const SettingsPage = () => {
	return (
		<Card>
			<CardHeader>
				<div className='flex items-center gap-2'>
					<Settings className='text-muted-foreground' />
					<h2 className='text-xl font-bold'>Настройки</h2>
				</div>
			</CardHeader>
		</Card>
	)
}
