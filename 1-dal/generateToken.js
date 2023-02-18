const jwt = require('jsonwebtoken');
const PRIVATE_KEY = 'FHDVFHDVF787GF87SDFSD';

function generateToken(user) {
    const t = jwt.sign({
        "sub": user.id,
        "firstName": user.firstName,
        "lastName": user.lastName,
        "email": user.email,
        "phone": user.phone,
    }, PRIVATE_KEY, { expiresIn: '2hr' })
    return t;
}

module.exports = generateToken