const proxy = require('http-proxy-middleware');

//restart server anytime changes are made

module.exports = function(app) {
	app.use(proxy('/api/auth/signup', { target: 'http://localhost:5000/' }));
	app.use(proxy('/api/*', { target: 'http://localhost:5000/' }));
};
