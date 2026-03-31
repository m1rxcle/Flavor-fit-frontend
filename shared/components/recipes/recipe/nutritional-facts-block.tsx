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
	const facts = [
		{ label: 'Углеводов', value: carbohydrates },
		{ label: 'Жиров', value: fats },
		{ label: 'Клетчатки', value: fiber },
		{ label: 'Белков', value: proteins }
	]

	return (
		<div className={cn('flex gap-4', className)}>
			{facts.map((fact, index) => (
				<div key={index} className='flex items-baseline gap-1'>
					<span className='text-lg font-extrabold'>
						{fact.value}г
					</span>
					<p className='text-muted-foreground text-sm'>
						{fact.label}
					</p>
				</div>
			))}
		</div>
	)
}
