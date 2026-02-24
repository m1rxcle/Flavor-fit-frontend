import { Eye, EyeClosed } from 'lucide-react'

interface Props {
	showPassword: boolean
	className?: string
	setShowPassword: (value: boolean) => void
}

export const ShowPassword = ({
	showPassword,
	className,
	setShowPassword
}: Props) => {
	return (
		<div
			className={className}
			onClick={() => setShowPassword(!showPassword)}
		>
			{showPassword ? (
				<Eye className='text-muted-foreground h-6 w-6' />
			) : (
				<EyeClosed className='text-muted-foreground h-6 w-6' />
			)}
		</div>
	)
}
