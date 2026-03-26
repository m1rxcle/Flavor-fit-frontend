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
	label?: string
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

	areaDefaultValue?: string
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
	selectOptions,
	areaDefaultValue
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
										'rounded-full pl-10 text-sm md:text-base',
										'focus-visible:ring-accent focus-visible:border-none focus-visible:ring-1',
										'transition-all duration-300 ease-in-out',
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
										'cursor-pointer rounded-full text-sm md:text-base',
										'select:text-2xl focus-visible:ring-accent focus-visible:border-none focus-visible:ring-1',
										'transition-all duration-300 ease-in-out',
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
										'textarea-scrollbar h-28 resize-none rounded-2xl text-sm wrap-break-word md:text-base',
										'focus-visible:ring-accent font-semibold placeholder:text-sm focus-visible:border-none focus-visible:ring-1',
										'transition-all duration-300 ease-in-out',
										className
									)}
									defaultValue={areaDefaultValue}
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
