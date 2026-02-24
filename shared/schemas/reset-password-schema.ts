import { z } from 'zod'

export const ResetPasswordSchema = z.object({
	email: z.email('Почта должна быть правильного формата!')
})

export type TResetPasswordSchema = z.infer<typeof ResetPasswordSchema>
