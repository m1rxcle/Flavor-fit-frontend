import { NextIntlClientProvider } from 'next-intl'
import { Fredoka, Marck_Script, Nunito } from 'next/font/google'

import { Provider } from '@/shared/providers'

import './globals.css'

const nunito = Nunito({ subsets: ['latin'] })

export const fredoka = Fredoka({
	subsets: ['latin'],
	weight: ['600', '700']
})

export const comforter = Marck_Script({
	weight: ['400']
})

export default function AppLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru' suppressHydrationWarning data-scroll-behavior='smooth'>
			<body className={`${nunito.className} antialiased`}>
				<NextIntlClientProvider>
					<Provider>{children}</Provider>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
