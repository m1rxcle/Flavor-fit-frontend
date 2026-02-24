import { FilterIcon, SearchIcon } from 'lucide-react'

import { cn } from '../../lib/utils'
import { Input } from '../ui/input'

interface Props {
	isIcon?: boolean
	isFilter?: boolean
	className?: string
}

export const SearchInput = ({ isFilter, isIcon, className }: Props) => {
	return (
		<div className={cn('relative h-12 w-full', className)}>
			<Input
				type='search'
				placeholder='Поиск по рецепту...'
				className={cn(
					'focus-visible:border-accent h-full w-full rounded-full pl-12 focus-visible:ring-0'
				)}
			/>
			{isIcon && (
				<SearchIcon className='text-muted-foreground absolute top-3 left-4' />
			)}
			{isFilter && (
				<FilterIcon
					size={20}
					className='text-muted-foreground absolute top-3 right-4 hover:cursor-pointer'
				/>
			)}
		</div>
	)
}
