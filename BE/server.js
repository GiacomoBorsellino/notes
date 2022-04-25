/** Import Express e istanziamento app */
const express = require('express');
const app = express();

const port = 3001;
console.log(port)
console.log('Welcome to my dungeon, dear fellow, are you sure that you are ready?')


/** Import di Sequelize "destrutturato", permette uso di intelliSense */
const { Sequelize } = require('sequelize'); 
/** Import dei Datatypes destrutturati */
const { DataTypes } = require("sequelize"); 

/** Import cors e bodyparser */ 
const bodyParser = require("body-parser");

// app.use(express.json()) Stessa cosa ma più nuova(?)
const cors = require("cors");

var corsOptions = {
  origin: `http://localhost:4200`
};

app.use(cors(corsOptions));

/** Database */
const db = require('./models'); 
const { sequelize } = require('./models');

/** Import dei routers */
const usersRouter = require('./routes/users');

/** Un middleware usato per recepire la request del post */
app.use(express.json());

// Usiamo i metodi del route 'users'
app.use('/', usersRouter);

/** In ascolto su porta 3001 */
app.listen(3001);

/** Controlla della connessione al DB */
db.sequelize.authenticate().then(() => {
    console.log("Connessione Riuscita al DB");
}).catch((err) => {
    console.log(err);
    console.log("Errore connessione al DB");
});