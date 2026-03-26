import { cn } from '@/shared/lib/utils'

interface Props {
	carbohydrates: number
	fats: number
	fiber: number
	proteins: number
	className?: string
}

export const NutritionalFactsBlock: React.FC<Props> = ({
	carbohydrates,
	fats,
	fiber,
	proteins,
	className
}) => {
	return (
		<div className={cn('flex gap-4', className)}>
			<div className='flex items-baseline gap-1'>
				<span className='text-lg font-extrabold'>{carbohydrates}г</span>
				<p className='text-muted-foreground text-sm'>Углеводы</p>
			</div>
			<div className='flex items-baseline gap-1'>
				<span className='text-lg font-extrabold'>{fats}г</span>
				<p className='text-muted-foreground text-sm'>Жиры</p>
			</div>
			<div className='flex items-baseline gap-1'>
				<span className='text-lg font-extrabold'>{fiber}г</span>
				<p className='text-muted-foreground text-sm'>Клетчатка</p>
			</div>
			<div className='flex items-baseline gap-1'>
				<span className='text-lg font-extrabold'>{proteins}г</span>
				<p className='text-muted-foreground text-sm'>Протеины</p>
			</div>
		</div>
	)
}
