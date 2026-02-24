import type { Role } from '@/graphql/generated/graphql'

export type TAuthWrapperType =
	| 'login'
	| 'register'
	| 'verify'
	| 'reset'
	| 'new-password'

export interface IUserShort {
	fullName: string
	email: string
	role: Role
}
