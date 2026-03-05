'use client'

import { easeInOut, motion } from 'motion/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { AUTH_CONFIG } from '@/shared/constants'

import { cn } from '@/shared/lib/utils'

import { AnimatedMaskot } from '../animated/animated-maskot'
import { AnimatedMaskotHat } from '../animated/animated-maskot-hat'
import { Card, CardContent } from '../ui/card'

import type { TAuthWrapperType } from '@/types'

interface Props {
	type: TAuthWrapperType
	className?: string
}

export const AuthWrapper: React.FC<Props> = ({ type, className }) => {
	const t = useTranslations(`auth.${type}`)

	const config = AUTH_CONFIG[type]
	const FormComponent = config.form

	const isLogin = type === 'login'
	return (
		<section
			className={cn(
				'relative mt-8 flex items-start justify-center px-6 md:mt-10 md:px-0',
				className
			)}
		>
			<div className='flex items-end justify-center'>
				<div className='-mr-4 flex flex-col gap-10 select-none'>
					{(type === 'login' || type === 'register') && (
						<AnimatedMaskot
							url='/images/auth/maskots/1-maskot.png'
							width={200}
							height={200}
							priority
							className='pointer-events-none -z-10 hidden cursor-none md:block'
						/>
					)}

					<AnimatedMaskot
						url='/images/auth/maskots/2-maskot.png'
						width={200}
						height={200}
						priority
						className='pointer-events-none -z-10 hidden cursor-none md:block'
					/>
				</div>
				<motion.div
					initial={{ opacity: 0, y: 0 }}
					animate={{ opacity: 1, y: [0, -20, 10, 0] }}
					exit={{ opacity: 0, y: 0 }}
					transition={{ duration: 0.5, ease: easeInOut }}
				>
					<Card className='shadow-primary/50 border-primary/20 relative border px-3 py-6 shadow-sm dark:shadow-xs'>
						<CardContent>
							<div className='mb-4'>
								<div className='flex items-center justify-center gap-4'>
									{(type === 'login' ||
										type === 'register') && (
										<Image
											src='/images/auth/maskots/4-maskot.png'
											alt='maskot'
											width={50}
											height={50}
											className='pointer-events-none hidden cursor-none md:block'
										/>
									)}
									<h1 className='text-primary mb-2 text-center text-4xl font-extrabold italic'>
										{t('title')}
									</h1>
								</div>
								<p className='text-center text-base font-medium'>
									{t('description')}
								</p>
							</div>
							<div className='bg-primary/20 mb-4 h-px w-full' />

							<FormComponent />

							<div className='bg-primary/20 mt-4 mb-4 h-px w-full' />
							{type === 'login' ? (
								<p className='text-muted-foreground text-center text-base font-medium'>
									{t.rich('footer', {
										important: chunk => (
											<Link
												href='/auth/register'
												className='text-accent font-bold underline'
											>
												<span>{chunk}</span>
											</Link>
										)
									})}
								</p>
							) : (
								(type === 'register' ||
									type === 'reset' ||
									type === 'new-password') && (
									<p className='text-muted-foreground text-center text-base font-medium'>
										{t.rich('footer', {
											important: chunk => (
												<Link
													href={
														isLogin
															? '/auth/register'
															: '/auth/login'
													}
													className='text-accent font-bold underline'
												>
													<span>{chunk}</span>
												</Link>
											)
										})}
									</p>
								)
							)}
						</CardContent>
					</Card>
				</motion.div>

				<AnimatedMaskotHat
					url='/images/auth/maskots/3-maskot.png'
					width={180}
					height={180}
					priority
					className='pointer-events-none z-10 -ml-5 hidden rotate-15 cursor-none md:block'
				/>
			</div>
		</section>
	)
}
