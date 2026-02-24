import {
	LoginForm,
	NewPassword,
	RegisterForm,
	ResetForm,
	VerifyOtp
} from '../components/auth'

export const AUTH_CONFIG = {
	login: {
		title: 'Приветствуем снова!',
		description: `Авторизуйтесь в FlavorFit и продолжите ваше здоровое приключение!`,
		form: LoginForm,
		showSwitchLink: true
	},
	register: {
		title: 'Приветствуем!',
		description:
			'Зарегистрируйтесь в FlavorFit и начните ваше здоровое питание!',
		form: RegisterForm,
		showSwitchLink: true
	},
	verify: {
		title: 'Подтверждение почты',
		description: 'Проверьте свою почту и введите код подтверждения',
		form: VerifyOtp,
		showSwitchLink: false
	},
	reset: {
		title: 'Восстановление пароля',
		description: 'Введите вашу почту для восстановления пароля',
		form: ResetForm,
		showSwitchLink: false
	},
	'new-password': {
		title: 'Создание нового пароля',
		description: 'Придумайте новый пароль для входа в систему',
		form: NewPassword,
		showSwitchLink: false
	}
}
