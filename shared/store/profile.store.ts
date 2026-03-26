import { create } from 'zustand'

import type { TUpdateProfileSchema } from '../schemas'

interface IInitialState {
	profileData: TUpdateProfileSchema | null
}

interface IActions {
	setProfileData: (data: TUpdateProfileSchema) => void
}

interface IProfileState extends IInitialState, IActions {}

export const useProfileStore = create<IProfileState>()(set => ({
	profileData: null,

	setProfileData: data => set({ profileData: data })
}))
