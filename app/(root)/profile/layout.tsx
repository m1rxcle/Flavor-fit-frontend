import { ProfileMenu } from '@/shared/components/profile/profile-menu'

export default function ProfileLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<main className='bg-background flex'>
			<ProfileMenu />
			<section className='flex-1 py-6 pb-40 md:px-6 md:pb-6'>
				{children}
			</section>
		</main>
	)
}
