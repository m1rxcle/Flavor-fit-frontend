import { type NextRequest, NextResponse } from 'next/server'

const PUBLIC_PATHS = ['/login', '/register', '/verify', '/reset-password']

export function proxy(req: NextRequest) {
	const refreshToken = req.cookies.get('refreshToken')
	const path = req.nextUrl.pathname

	if (PUBLIC_PATHS.some(publicPath => path.startsWith(publicPath))) {
		return NextResponse.next()
	}

	if (!refreshToken) {
		return NextResponse.redirect(new URL('/login', req.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: [
		'/((?!_next|favicon.ico|images|.*\\.(?:png|jpg|jpeg|svg|webp)$).*)'
	]
}
