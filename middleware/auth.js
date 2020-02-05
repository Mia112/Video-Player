const config = require('config');
const jwt = require('jsonwebtoken');
function auth(req, res, next) {
	const token = req.headers['x-auth-token'];
	if (!token) return res.status(401).json({ msg: 'Authorizaton denied' });

	try {
		const decoded = jwt.verify(token, config.get('jwtSecret'));
		req.user = decoded.id;
		console.log(decoded.id);
		next();
	} catch (e) {
		res.status(400).json({ msg: 'Token is not valid' });
	}
}

module.exports = auth;
