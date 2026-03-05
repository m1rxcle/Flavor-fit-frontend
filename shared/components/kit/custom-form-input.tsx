import type { LucideIcon } from 'lucide-react'
import type { Control, FieldValues, Path } from 'react-hook-form'

import { cn } from '@/shared/lib/utils'

import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	NativeSelect,
	NativeSelectOption,
	Textarea
} from '../ui'

interface Props<T extends FieldValues> {
	name: Path<T>
	label: string
	Icon?: LucideIcon
	IconRight?: LucideIcon
	IconRightClassName?: string
	content: 'input' | 'select' | 'textarea'
	selectOptions?: { value: string; label: string }[]
	selectId?: string
	type?: 'text' | 'email' | 'password' | 'number'
	placeholder: string
	formControl: Control<T>
	contentId?: string
	loading?: boolean
	className?: string
	contentSpanValue?: 'см' | 'кг' | 'лет'
	contentSpanClassName?: string
}

export const CustomFormInput = <T extends FieldValues>({
	name,
	label,
	Icon,
	IconRight,
	IconRightClassName,
	content,
	type,
	placeholder,
	formControl,
	loading,
	className,
	contentId,
	contentSpanValue,
	contentSpanClassName,
	selectOptions
}: Props<T>) => {
	return (
		<FormField
			name={name}
			control={formControl}
			render={({ field }) => (
				<FormItem className='w-full'>
					<FormLabel htmlFor={contentId}>
						<h2 className='text-muted-foreground font-bold'>
							{label}
						</h2>
					</FormLabel>
					<FormControl>
						<div className='relative'>
							{content === 'input' && (
								<Input
									id={contentId}
									className={cn(
										'focus-visible:ring-accent rounded-full pl-10 text-sm transition-all duration-300 ease-in-out focus-visible:border-none focus-visible:ring-1 md:text-base',
										className
									)}
									placeholder={placeholder}
									type={
										type === 'text'
											? 'text'
											: type === 'email'
												? 'email'
												: type === 'number'
													? 'number'
													: 'password'
									}
									disabled={loading}
									{...field}
								/>
							)}
							{content === 'select' && (
								<NativeSelect
									{...field}
									id={contentId}
									disabled={loading}
									className={cn(
										'select:text-2xl focus-visible:ring-accent cursor-pointer rounded-full text-sm transition-all duration-300 ease-in-out focus-visible:border-none focus-visible:ring-1 md:text-base',
										className
									)}
								>
									{selectOptions?.map((option, index) => (
										<NativeSelectOption
											key={index}
											value={option.value}
											className='bg-accent/10 cursor-pointer rounded-full font-semibold text-black'
										>
											{option.label}
										</NativeSelectOption>
									))}
								</NativeSelect>
							)}
							{content === 'textarea' && (
								<Textarea
									id={contentId}
									className={cn(
										'textarea-scrollbar focus-visible:ring-accent h-28 resize-none rounded-2xl text-sm font-semibold wrap-break-word transition-all duration-300 ease-in-out focus-visible:border-none focus-visible:ring-1 md:text-base',
										className
									)}
									placeholder={placeholder}
									disabled={loading}
									{...field}
								/>
							)}
							{Icon && (
								<Icon className='text-muted-foreground absolute top-1.5 left-3' />
							)}
							{IconRight && (
								<IconRight
									className={cn(
										'absolute top-1.5 right-3',
										IconRightClassName
									)}
								/>
							)}
							{field.value && (
								<span
									className={cn(
										'absolute top-2.5 left-16',
										contentSpanClassName
									)}
								>
									{contentSpanValue}
								</span>
							)}
						</div>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
