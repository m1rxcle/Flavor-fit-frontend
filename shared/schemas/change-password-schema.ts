import { z } from 'zod'

export const ChangePasswordSchema = z
	.object({
		oldPassword: z
			.string('Пароль обязателен!')
			.min(6, 'Пароль должен содержать минимум 6 символов!'),
		newPassword: z
			.string('Пароль обязателен!')
			.min(6, 'Пароль должен содержать минимум 6 символов!')
	})
	.refine(data => data.oldPassword !== data.newPassword, {
		message:
			'Вы ввели одинаковые пароли, пожалуйста, выберите другой пароль!',
		path: ['newPassword']
	})

export type TChangePasswordSchema = z.infer<typeof ChangePasswordSchema>
