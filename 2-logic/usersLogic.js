const execute = require('../1-dal/dalSql')

async function getAllUsers() {
    const query = 'SELECT * FROM users';
    const [results] = await execute(query);
    return results;
}

async function addUser(user) {
    const { firstName, lastName, city, address, phone, email, role, password, armyId } = user
    const query = `INSERT INTO users(firstName,lastName,city,address,phone,email,role,password,armyId) VALUES(?,?,?,?,?,?,?,?,?)`
    const results = await execute(query,[firstName,lastName,city,address,phone,email,role,password,armyId]);
    return results;
}

module.exports = { getAllUsers, addUser }