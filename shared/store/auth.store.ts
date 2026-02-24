import { create } from 'zustand'

import type { IUserShort } from '@/types'

interface IInitialState {
	accessToken: string | null | undefined
	user: IUserShort | null

	showPassword: boolean
	showRepeatPassword: boolean
	code: string
	isResendDisabled: boolean
	secondsLeft: number
}

interface IActions {
	setAccessToken: (token: string | null | undefined) => void
	setUser: (user: IUserShort | null) => void

	setShowPassword: (value: boolean) => void
	setShowRepeatPassword: (value: boolean) => void
	setCode: (code: string) => void
	setIsResendDisabled: (value: boolean) => void
	setSecondsLeft: (value: number) => void
}

interface IAuthState extends IInitialState, IActions {}

export const useAuthStore = create<IAuthState>()(set => ({
	accessToken: null,
	user: null,

	showPassword: false,
	showRepeatPassword: false,
	code: '',
	isResendDisabled: true,
	secondsLeft: 60,

	setAccessToken: token => set({ accessToken: token }),
	setUser: user => set({ user }),

	setShowPassword: value => set({ showPassword: value }),
	setShowRepeatPassword: value => set({ showRepeatPassword: value }),
	setCode: code => set({ code }),
	setIsResendDisabled: value => set({ isResendDisabled: value }),
	setSecondsLeft: value => set({ secondsLeft: value })
}))
