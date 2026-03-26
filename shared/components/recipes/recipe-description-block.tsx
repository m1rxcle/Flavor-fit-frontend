import { cn } from '@/shared/lib/utils'

interface Props {
	description: string
	className?: string
}

export const RecipeDescriptionBlock: React.FC<Props> = ({
	description,
	className
}) => {
	return (
		<p className={cn('text-muted-foreground line-clamp-2', className)}>
			{description}
		</p>
	)
}
