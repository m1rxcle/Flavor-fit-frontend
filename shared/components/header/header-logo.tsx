import Link from 'next/link'

import { comforter, fredoka } from '@/app/layout'

export const HeaderLogo = () => {
	return (
		<Link className='bg-gradient rounded-full px-3 py-1' href='/'>
			<h1
				className={`text-primary-foreground text-3xl font-bold text-shadow-lg ${comforter.className}`}
			>
				F
			</h1>
		</Link>
	)
}
