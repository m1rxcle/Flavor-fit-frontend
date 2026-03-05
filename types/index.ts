import type { Role } from '@/graphql/generated/graphql'

export type TAuthWrapperType =
	| 'login'
	| 'register'
	| 'verify'
	| 'reset'
	| 'new-password'
	| 'two-factor'

export interface IUserShort {
	fullName: string
	email: string
	role: Role
}

export interface JwtPayload {
	id: string
	role: Role
}
