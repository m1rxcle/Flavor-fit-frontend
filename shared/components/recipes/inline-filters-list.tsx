'use client'

import { ChevronDownIcon, ChevronRightIcon } from 'lucide-react'
import { useState } from 'react'

import { FILTERS_DATA } from '@/shared/constants/filters.constants'

export const InlineFiltersList = () => {
	const [openMap, setOpenMap] = useState<Record<string, boolean>>({})

	const toggle = (title: string) => {
		setOpenMap(prev => ({ ...prev, [title]: !prev[title] }))
	}

	return (
		<div className='flex h-[70vh] flex-col gap-6 overflow-x-hidden overflow-y-auto'>
			{FILTERS_DATA.map(filter => {
				const isOpen = !!openMap[filter.title]

				return (
					<div key={filter.title} className='flex flex-col gap-2'>
						<div
							className='flex cursor-pointer items-center justify-between gap-4'
							onClick={() => toggle(filter.title)}
						>
							<div className='flex items-center gap-2'>
								<filter.icon />
								<h1>{filter.title}</h1>
							</div>
							<ChevronDownIcon
								className={
									isOpen
										? 'rotate-180 transition-transform'
										: 'transition-transform'
								}
							/>
						</div>

						{isOpen && (
							<div className='mt-2 flex flex-col gap-2 pl-6'>
								{filter.items.map(item => (
									<div
										key={item.name}
										className='text-muted-foreground hover:text-primary flex cursor-pointer items-center gap-2 transition-colors duration-300 ease-in-out'
									>
										<ChevronRightIcon size={16} />
										<span>{item.name}</span>
									</div>
								))}
							</div>
						)}
					</div>
				)
			})}
		</div>
	)
}
