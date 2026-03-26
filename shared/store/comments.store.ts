import { create } from 'zustand'

import type { GetAllCommentsFromRecipeQuery } from '@/graphql/generated/graphql'

interface IInitialState {
	editingComment:
		| GetAllCommentsFromRecipeQuery['getAllCommentsFromRecipe'][number]
		| null

	collapsed: boolean
}

interface IActions {
	setEditingComment: (
		comment:
			| GetAllCommentsFromRecipeQuery['getAllCommentsFromRecipe'][number]
			| null
	) => void

	setCollapsed: (value: boolean) => void
}

interface ICommentState extends IInitialState, IActions {}

export const useCommentsStore = create<ICommentState>()(set => ({
	editingComment: null,
	collapsed: false,

	setCollapsed: value => set({ collapsed: value }),

	setEditingComment: comment =>
		set({
			editingComment: comment
		})
}))
