import { Settings } from 'lucide-react'

import { SearchInput } from '../kit'
import { Card, CardContent } from '../ui'

import { InlineFiltersList } from './inline-filters-list'

interface Props {
	setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

export const RecipesSidebar = ({ setSearchTerm }: Props) => {
	return (
		<aside className='md:w-72 md:shrink-0'>
			<div className='sticky top-0'>
				<Card>
					<CardContent>
						<div className='hidden md:flex md:flex-col md:space-y-4'>
							<SearchInput
								onChange={e => {
									e.preventDefault()
									setSearchTerm(e.target.value)
								}}
								isIcon
								isFilter
							/>

							<InlineFiltersList />
						</div>

						<div className='flex items-center justify-between gap-2 md:hidden'>
							<h1 className='text-lg font-bold'>Фильтры</h1>
							<Settings className='text-muted-foreground' />
						</div>
					</CardContent>
				</Card>
			</div>
		</aside>
	)
}
