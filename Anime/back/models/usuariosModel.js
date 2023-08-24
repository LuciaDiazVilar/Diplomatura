var pool = require('./bd');
var md5 = require('md5');

async function getUserByUsernameAndPassword(user, password) {
    try {
        console.log ('consultabd')
        var query = "select * from usuarios where usuario = ? and password = ? limit 1";
        var rows = await pool.query(query, [user, md5(password)]);
        console.log (rows)
        return rows[0];
    } catch (error) {
        throw error;
    }
}

module.exports = { getUserByUsernameAndPassword }