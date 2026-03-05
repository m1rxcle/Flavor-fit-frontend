import { type Dispatch, type SetStateAction } from 'react'

import {
	Button,
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle
} from '../ui'

interface Props {
	title: string
	description: string
	openDialog: boolean
	className?: string
	setOpenDialog: Dispatch<SetStateAction<boolean>>
	onAccept: () => void
}

export const ConfirmationModal: React.FC<Props> = ({
	title,
	description,
	openDialog,
	className,
	onAccept,
	setOpenDialog
}) => {
	return (
		<Dialog open={openDialog} onOpenChange={setOpenDialog}>
			<DialogContent className={className}>
				<DialogHeader>
					<DialogTitle className='text-2xl font-bold'>
						{title}
					</DialogTitle>
				</DialogHeader>
				<DialogDescription className='text-center md:text-start'>
					<span className='text-sm font-medium whitespace-pre-line md:text-base'>
						{description}
					</span>
				</DialogDescription>
				<DialogFooter>
					<Button
						onClick={onAccept}
						className='bg-accent hover:bg-accent/80 rounded-lg font-bold hover:scale-102 active:scale-98'
					>
						Подтвердить
					</Button>
					<DialogClose asChild>
						<Button
							variant='outline'
							className='rounded-lg font-bold hover:scale-102 hover:bg-transparent active:scale-98'
						>
							Закрыть
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
