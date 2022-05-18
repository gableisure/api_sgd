const pgp = require('pg-promise')();
const db = pgp({
    user: 'postgres',
    password: 'eib',
    host: 'localhost',
    port: 5432,
    database: 'sgd'
});

module.exports = db;