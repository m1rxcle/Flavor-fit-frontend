import { FilterIcon, SearchIcon } from 'lucide-react'

import { cn } from '../../lib/utils'
import { Input } from '../ui/input'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	isIcon?: boolean
	isFilter?: boolean
	value?: string
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
	className?: string
}

export const SearchInput = ({
	isFilter,
	isIcon,
	className,
	value,
	onChange
}: Props) => {
	return (
		<div className={cn('relative h-12 w-full', className)}>
			<Input
				type='text'
				placeholder='Поиск по рецепту...'
				className={cn(
					'focus-visible:border-accent h-full w-full rounded-full pl-12 focus-visible:ring-0'
				)}
				value={value}
				onChange={onChange}
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
