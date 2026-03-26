// globals.d.ts
declare module '*.css' {
	const classes: Record<string, string>
	export default classes
}

declare module 'swiper/*' {
	const classes: Record<string, string>
	export default classes
}
