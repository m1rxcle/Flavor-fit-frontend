import { z } from 'zod'

export const LoginSchema = z.object({
	email: z.email('Почта должна быть правильного формата!'),
	password: z
		.string('Пароль обязателен!')
		.min(6, 'Пароль должен содержать минимум 6 символов!'),
	token: z.optional(z.string('Код должен быть строкой!'))
})

export type TLoginSchema = z.infer<typeof LoginSchema>
