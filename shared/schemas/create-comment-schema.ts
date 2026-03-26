import { z } from 'zod'

export const CreateCommentSchema = z.object({
	content: z
		.string()
		.min(1, 'Комментарий не может быть пустым!')
		.max(200, 'Комментарий не должен превышать 200 символов!')
		.refine(value => !/[<>{}]/.test(value), {
			message: 'Нельзя использовать символы <, >, {, }'
		})
})

export type TCreateCommentSchema = z.infer<typeof CreateCommentSchema>
