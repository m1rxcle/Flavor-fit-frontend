import type {
	Role,
	UpdateUserProfileMutation
} from '@/graphql/generated/graphql'

export type TAuthWrapperType =
	| 'login'
	| 'register'
	| 'verify'
	| 'reset'
	| 'new-password'
	| 'two-factor'

export interface IUserShort {
	id: string
	fullName: string
	email: string
	role: Role
}

export interface JwtPayload {
	id: string
	role: Role
}

export type IUserProfileAndMeasurements =
	| UpdateUserProfileMutation['updateProfile']
	| null
