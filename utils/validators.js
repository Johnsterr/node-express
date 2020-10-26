const {body} = require('express-validator');
const User = require('../models/user');

exports.registerValidators = [
	body('name').isLength({min: 3}).withMessage('Имя должно быть минимум 3 символа').trim(),
	body('email')
		.isEmail()
		.withMessage('Введите корректный Email')
		.custom(async (value, {req}) => {
			try {
				const user = await User.findOne({email: value});
				if (user) {
					return Promise.reject('Пользователь с таким Email уже существует');
				}
			} catch (e) {
				console.log(e);
			}
		})
		.normalizeEmail(),
	body('password', 'Пароль должен быть минимум 6 символов, максимум 20 символов')
		.isLength({min: 6, max: 20})
		.isAlphanumeric()
		.trim(),
	body('confirm')
		.custom((value, {req}) => {
			if (value !== req.body.password) {
				throw new Error('Пароли должны совпадать')
			}
			return true;
		})
		.trim()
];

exports.loginValidators = [];

exports.courseValidators = [
	body('title').isLength({min: 3}).withMessage('Минимальная длина названия 3 символа').trim(),
	body('price').isNumeric().withMessage('Введите корректную цену'),
	body('img', 'Введите корректный URL картинки').isURL()
];