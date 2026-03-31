import { useEffect, useState } from 'react'

export const useDebounce = (searchTerm: string, timeToWait: number) => {
	const [debouncedSearch, setDebouncedSearch] = useState<string>('')

	useEffect(() => {
		const timeout = setTimeout(() => {
			setDebouncedSearch(searchTerm)
		}, timeToWait)

		return () => clearTimeout(timeout)
	}, [searchTerm])

	return debouncedSearch
}
