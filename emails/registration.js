const access = require('../access');
const keys = require('../keys');

module.exports = function(email) {
	return {
		to: email,
		from: access.MAIL,
		subject: 'Аккаунт создан',
		html: `
			<h1>Добро пожаловать в наш магазин</h1>
			<p>Ваш аккаунт c почтой ${email} был успешно создан</p>
			<hr />
			<a href="${keys.BASE_URL}">Магазин курсов</a>
		`
	}
}