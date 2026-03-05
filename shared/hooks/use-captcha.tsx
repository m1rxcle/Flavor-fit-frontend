'use client'

import type { TurnstileInstance } from '@marsidev/react-turnstile'
import { useRef, useState } from 'react'

export const useCaptcha = () => {
	const [captchaToken, setCaptchaToken] = useState<string | null>('')

	const ref = useRef<TurnstileInstance | null>(null)

	const reset = () => {
		ref.current?.reset()
	}

	return {
		ref,
		captchaToken,
		setCaptchaToken,
		reset,
		isValidated: !!captchaToken
	}
}
