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
	emailFor2fa: string
	passwordFor2fa: string
	captcha: string
}

interface IActions {
	setAccessToken: (token: string | null | undefined) => void
	setUser: (user: IUserShort | null) => void

	setShowPassword: (value: boolean) => void
	setShowRepeatPassword: (value: boolean) => void
	setCode: (code: string) => void
	setIsResendDisabled: (value: boolean) => void
	setSecondsLeft: (value: number) => void

	setEmailFor2fa: (email: string) => void
	setPasswordFor2fa: (password: string) => void
	setCaptcha: (captcha: string) => void
}

interface IAuthState extends IInitialState, IActions {}

export const useAuthStore = create<IAuthState>()(set => ({
	accessToken: null,
	user: null,
	emailFor2fa: '',
	passwordFor2fa: '',
	showPassword: false,
	showRepeatPassword: false,
	code: '',
	isResendDisabled: true,
	secondsLeft: 60,
	captcha: '',

	setCaptcha: value => set({ captcha: value }),

	setEmailFor2fa: value => set({ emailFor2fa: value }),
	setPasswordFor2fa: value => set({ passwordFor2fa: value }),
	setAccessToken: token => set({ accessToken: token }),
	setUser: user => set({ user }),

	setShowPassword: value => set({ showPassword: value }),
	setShowRepeatPassword: value => set({ showRepeatPassword: value }),
	setCode: code => set({ code }),
	setIsResendDisabled: value => set({ isResendDisabled: value }),
	setSecondsLeft: value => set({ secondsLeft: value })
}))
