if (process.env.NODE_ENV === 'production') {
	module.exports = require('../access.prod');
} else {
	module.exports = require('../access.dev');
}