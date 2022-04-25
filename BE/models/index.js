/** Import della configurazione del Database */
const config = require('../config/db.config');

/** Import di dotenv */
require('dotenv').config()

/** Controllo dell'import di dotenv */
console.log(process.env.DB_PASSWORD);

const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD, {
        host: config.HOST,
        dialect: config.dialect,
        operatorsAliases: false
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

/* Import del Model User */
db.user = require("../models/user.model")(sequelize, Sequelize);

// ATTENZIONE! : Drop Tabelle
/* 
db.sequelize.sync({force: true}).then(() => {
    console.log('Drop e Resync Database con { force: true }');
}); 
*/

module.exports = db;