'use server'

import { jwtVerify } from 'jose'

import type { JwtPayload } from '@/types'

export async function jwtVerifyServer(accessToken: string) {
	try {
		const { payload }: { payload: JwtPayload } = await jwtVerify(
			accessToken,
			new TextEncoder().encode(process.env.JWT_SECRET)
		)
		return payload
	} catch (err) {
		console.error('JWT verification failed:', err)
		return null
	}
}
