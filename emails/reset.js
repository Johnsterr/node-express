const keys = require('../keys');

module.exports = function(email, token) {
	return {
		to: email,
		from: keys.MAIL,
		subject: 'Восстановление пароля',
		html: `
			<h1>Вы забыли пароль?</h1>
			<p>Если запрос о восстановлении пароля был от вас, то нажмите на ссылку ниже:</p>
			<p><a href="${keys.BASE_URL}/auth/password/${token}">Восстановить пароль</a></p>
			<p>Если вы не запрашивали восстановление пароля, то проигнорируйте данное письмо</p>
			<hr />
			<a href="${keys.BASE_URL}">Магазин курсов</a>
		`
	}
}