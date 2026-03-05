export const IS_CLIENT: boolean = typeof window !== 'undefined'
export const CAPTCHA_KEY: string | undefined =
	process.env.CLOUDFLARE_TURNSTILE_SITE_KEY
