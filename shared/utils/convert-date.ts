export const convertDate = (date: string) => {
	const makeDate = new Date(date)

	return makeDate.toLocaleDateString('ru-RU', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		hour: 'numeric',
		minute: 'numeric'
	})
}
