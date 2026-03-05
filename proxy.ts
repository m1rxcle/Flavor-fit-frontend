import { type NextRequest, NextResponse } from 'next/server'

import { getTokenFromRequest } from './shared/server/get-token-from-request'
import { jwtVerifyServer } from './shared/server/jwt-verify.server'

export async function proxy(req: NextRequest) {
	const path = req.nextUrl.pathname
	const isAuthRoute = path.startsWith('/auth')
	const token = await getTokenFromRequest(req)
	const payload = token ? await jwtVerifyServer(token) : null

	if (payload && isAuthRoute) {
		return NextResponse.redirect(new URL('/', req.url))
	}

	if (!payload && !isAuthRoute) {
		return NextResponse.redirect(new URL('/auth/login', req.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: [
		'/((?!_next|favicon.ico|images|.*\\.(?:png|jpg|jpeg|svg|webp)$).*)'
	]
}
