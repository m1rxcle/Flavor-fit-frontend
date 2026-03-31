import { ShoppingCart } from 'lucide-react'
import React from 'react'

interface Props {
	className?: string
}

export const AddToCartButton: React.FC<Props> = ({ className }) => {
	return (
		<div className={className}>
			<ShoppingCart className='text-muted-foreground hover:text-primary size-5 cursor-pointer transition-colors duration-300 ease-in-out hover:scale-110 active:scale-95' />
		</div>
	)
}
