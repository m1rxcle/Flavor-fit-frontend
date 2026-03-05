import z from 'zod'

import {
	ActivityLevel,
	Genders,
	NutritionalGoals
} from '@/graphql/generated/graphql'

export const UpdateProfileSchema = z.object({
	profile: z.object({
		fullName: z
			.string('Имя должно быть строкой!')
			.min(2, 'Имя должно содержать минимум 2 символа!'),
		email: z.email('Почта должна быть правильного формата!'),
		imageUrl: z
			.optional(z.string('Ссылка должна быть строкой!'))
			.nullable(),
		gender: z.enum(Genders, 'Пол должен быть выбран!'),
		bio: z.optional(z.string('Биография должна быть строкой!')),
		age: z
			.string('Возраст должен быть числом!')
			.min(1, 'Возраст должен быть больше 0!'),
		sites: z.optional(z.array(z.string('Сайт должен быть строкой!')))
	}),
	measurements: z.object({
		growth: z
			.string('Рост должен быть строкой!')
			.min(2, 'Рост должен быть больше 0!'),
		currentWeight: z
			.string('Текущий вес должен быть строкой!')
			.min(2, 'Текущий вес должен быть больше 0!'),
		desiredWeight: z
			.string('Желаемый вес должен быть строкой!')
			.min(2, 'Желаемый вес должен быть больше 0!'),
		waistCircumference: z
			.string('Объем талии должен быть строкой!')
			.min(2, 'Объем талии должен быть больше 0!'),
		chestWeight: z
			.string('Объем груди должен быть строкой!')
			.min(2, 'Объем груди должен быть больше 0!'),
		thighCircumference: z
			.string('Объем бедер должен быть строкой!')
			.min(2, 'Объем бедер должен быть больше 0!'),
		armCircumference: z
			.string('Объем рук должен быть строкой!')
			.min(2, 'Объем рук должен быть больше 0!'),
		nutritionalGoals: z.enum(
			NutritionalGoals,
			'Цель питания должна быть выбрана!'
		),
		activityLevel: z.enum(
			ActivityLevel,
			'Уровень активности должен быть выбран!'
		)
	})
})

export type TUpdateProfileSchema = z.infer<typeof UpdateProfileSchema>
