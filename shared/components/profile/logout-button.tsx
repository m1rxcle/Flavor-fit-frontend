'use client'

import { useMutation } from '@apollo/client/react'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

import { LogOutDocument } from '@/graphql/generated/graphql'

import { getApolloClient } from '@/shared/lib/apollo'
import { cn } from '@/shared/lib/utils'

import { ConfirmationModal } from '../kit'
import { Button } from '../ui'

export const LogoutButton = ({ className }: { className?: string }) => {
	const [isOpenDialog, setIsOpenDialog] = useState(false)

	const router = useRouter()
	const client = getApolloClient()
	const [logout, { loading: isLogoutLoading }] = useMutation(LogOutDocument)

	const handleLogout = async () => {
		try {
			await logout()
			await client.clearStore()
			router.replace('/auth/login')
			toast.success('Вы успешно вышли из системы!')
		} catch (error) {
			if (error instanceof Error && error.message) {
				toast.error(error.message)
			}
		}
	}

	return (
		<>
			<Button
				variant='destructive'
				className={cn(
					'cursor-pointer rounded-full transition-all duration-300 ease-in-out active:scale-98',
					className
				)}
				onClick={() => setIsOpenDialog(true)}
				disabled={isLogoutLoading}
			>
				<span className='hidden text-base font-bold md:inline'>
					Выйти
				</span>
				<LogOut className='inline md:hidden' />
			</Button>
			<ConfirmationModal
				className='rounded-3xl'
				openDialog={isOpenDialog}
				setOpenDialog={setIsOpenDialog}
				title='Выход из аккаунта'
				description={`Вы уверены что хотите выйти из своего аккаунта ?\nБудем рады видеть вас снова в нашем приложении 🩷.`}
				onAccept={handleLogout}
			/>
		</>
	)
}
