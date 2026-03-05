import { PersonStanding, Ruler, WeightTilde } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

import type { TUpdateProfileSchema } from '@/shared/schemas/update-profile-schema'

import { CustomFormInput } from '../kit/custom-form-input'

interface Props {
	isUpdateProfileLoading: boolean
}

export const BodyMeasurementsForm = ({ isUpdateProfileLoading }: Props) => {
	const form = useFormContext<TUpdateProfileSchema>()

	return (
		<div className='flex-1 space-y-4'>
			<CustomFormInput
				name='measurements.growth'
				formControl={form.control}
				label='Ваш рост'
				content='input'
				contentId='growth'
				Icon={PersonStanding}
				placeholder='Ваш рост'
				type='text'
				contentSpanValue='см'
				contentSpanClassName='left-18'
				loading={isUpdateProfileLoading}
			/>
			<div className='flex items-center gap-4'>
				<CustomFormInput
					name='measurements.currentWeight'
					formControl={form.control}
					label='Ваш вес'
					content='input'
					contentId='currentWeight'
					Icon={WeightTilde}
					placeholder='Ваш вес'
					type='text'
					contentSpanValue='кг'
					loading={isUpdateProfileLoading}
				/>

				<CustomFormInput
					name='measurements.desiredWeight'
					formControl={form.control}
					label='Желаемый вес'
					content='input'
					contentId='desiredWeight'
					Icon={WeightTilde}
					placeholder='Желаемый вес'
					type='text'
					contentSpanValue='кг'
					loading={isUpdateProfileLoading}
				/>
			</div>
			<div>
				<div className='flex items-center gap-4'>
					<CustomFormInput
						name='measurements.waistCircumference'
						formControl={form.control}
						label='Обхват талии'
						content='input'
						contentId='waistCircumference'
						Icon={Ruler}
						placeholder='Обхват талии'
						type='text'
						loading={isUpdateProfileLoading}
						contentSpanValue='см'
					/>

					<CustomFormInput
						name='measurements.chestWeight'
						label='Обхват груди'
						contentId='chestWeight'
						Icon={Ruler}
						contentSpanValue='см'
						contentSpanClassName='left-18'
						content='input'
						type='text'
						placeholder='Обхват груди'
						formControl={form.control}
						loading={isUpdateProfileLoading}
					/>
				</div>
			</div>
			<div className='flex items-center gap-4'>
				<CustomFormInput
					name='measurements.thighCircumference'
					label='Обхват бедер'
					content='input'
					formControl={form.control}
					loading={isUpdateProfileLoading}
					type='text'
					placeholder='Обхват рук'
					Icon={Ruler}
					contentId='thighCircumference'
					contentSpanValue='см'
				/>
				<CustomFormInput
					name='measurements.armCircumference'
					label='Обхват рук'
					content='input'
					formControl={form.control}
					loading={isUpdateProfileLoading}
					type='text'
					placeholder='Обхват рук'
					Icon={Ruler}
					contentId='armCircumference'
					contentSpanValue='см'
				/>
			</div>

			<CustomFormInput
				name='measurements.nutritionalGoals'
				label='Цель питания'
				content='select'
				selectOptions={[
					{ value: 'WEIGHT_LOSS', label: 'Снижение веса' },
					{ value: 'MAINTENANCE', label: 'Поддержание веса' },
					{ value: 'MUSCLE_GAIN', label: 'Набор мышечного массы' }
				]}
				formControl={form.control}
				loading={isUpdateProfileLoading}
				placeholder='Ваша цель питания'
				contentId='nutritional-goals'
			/>

			<CustomFormInput
				name='measurements.activityLevel'
				label='Уровень активности'
				content='select'
				selectOptions={[
					{ value: 'SEDENTARY', label: 'Сидячий' },
					{ value: 'LIGHT', label: 'Легкий' },
					{ value: 'MODERATE', label: 'Средний' },
					{ value: 'ACTIVE', label: 'Активный' },
					{ value: 'VERY_ACTIVE', label: 'Очень активный' }
				]}
				formControl={form.control}
				loading={isUpdateProfileLoading}
				placeholder='Уровень активности'
				contentId='activity-levels'
			/>
		</div>
	)
}
