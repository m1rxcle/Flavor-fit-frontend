import { z } from 'zod'

export const ChangeEmailSchema = z.object({
	newEmail: z.email('Почта должна быть правильного формата!')
})

export type TChangeEmailSchema = z.infer<typeof ChangeEmailSchema>
