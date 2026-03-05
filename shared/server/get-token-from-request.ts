'use server'

import type { NextRequest } from 'next/server'

export async function getTokenFromRequest(request: NextRequest) {
	const refreshToken = request.cookies.get('refreshToken')?.value

	if (!refreshToken) {
		request.cookies.delete('refreshToken')
		return null
	}

	return refreshToken
}
