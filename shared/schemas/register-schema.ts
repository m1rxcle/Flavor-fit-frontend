import z from 'zod'

export const RegisterSchema = z
	.object({
		fullName: z
			.string('Имя обязательно!')
			.min(2, 'Имя должно содержать минимум 2 символа!'),
		email: z.email('Почта должна быть правильного формата!'),
		password: z
			.string('Пароль обязателен!')
			.min(6, 'Пароль должен содержать минимум 6 символов!'),
		confirmPassword: z
			.string('Пароль обязателен!')
			.min(6, 'Пароль должен содержать минимум 6 символов!')
	})
	.refine(data => data.password === data.confirmPassword, {
		message: 'Пароли не совпадают!',
		path: ['confirmPassword']
	})

export type TRegisterSchema = z.infer<typeof RegisterSchema>
