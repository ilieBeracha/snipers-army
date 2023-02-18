const execute = require("../1-dal/dalSql");

async function getAllActivities() {
    const query = 'SELECT * FROM activities';
    const [results] = await execute(query);
    return results;
}

async function getActivityBySection(id) {
    const query = 'SELECT * FROM activities WHERE activityByNameId = ?';
    const [results] = await execute(query, [id]);
    return results;
};

module.exports = { getAllActivities, getActivityBySection }