'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import React from 'react'

interface Props {
	url: string
	width: number
	height: number
	priority?: boolean
	className?: string
}

export const AnimatedMaskot: React.FC<Props> = ({
	url,
	width,
	height,
	priority,
	className
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, x: -50 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.5 }}
		>
			<Image
				src={url}
				alt='maskot'
				priority={priority}
				width={width}
				height={height}
				className={className}
			/>
		</motion.div>
	)
}
