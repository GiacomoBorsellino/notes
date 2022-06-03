/* Import di Sequelize "destrutturato", permette uso di intelliSense */
const { Sequelize } = require('sequelize'); 
/* Import dei Datatypes destrutturati */
const { DataTypes } = require("sequelize"); 

/* Pacchetti per generare il jwt da inviare dopo il login al nostro utente */
var jwt = require("jsonwebtoken");
/* Pacchetto per il criptaggio della password */
var bcrypt = require("bcryptjs");

/* Import della chiava segreta */
const config = require("../config/auth.config");

/* Import Model User */
const db = require('../models');
const { sequelize } = require('../models');
const User = db.user;

/* Import del pacchetto express e istanziamento app  */
const express = require('express');
const app = express();

/* Controller per registrazione utente */
exports.signup = (request, response) => {
    const user = request.body;
    User.create(
        {
            username:user.username,
            email:user.email,
            password:bcrypt.hashSync(user.password, 8),
            notes: user.notes
        }
    ) 
    .then((user) => {
        response.json(user);
    })
    .catch((err) => {
        console.log(err);
    })     
};

/* Controller login utente */
exports.login = (request, response) => {
    User.findOne({where: {email: request.body.email}})
    .then((user) => {
        if (!user) {
            return response.status(404).json({ message: "User non trovato" });
        }

        /* Restituisce true se la comparazione tra password è valida */
        var passwordIsValid = bcrypt.compareSync(
            request.body.password,
            user.password
        );   

        if (!passwordIsValid) {
            return response.status(401).json({
                accessToken: null,
                message: "Password non valida"
            })
        }

        var token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 86400 /** Expiration del token in 24 ore */
        });  

        response.status(200).json({
            id: user.id,
            username: user.username,
            email: user.email,
            accessToken: token
        });
    })
    .catch(err => {
        response.status(500).send({ message: err.message });
    });
};

/* Controller che restituisce un singolo utente */
 exports.getUser = (request, response) => {
    const {id}  = request.params;
    db.sequelize.sync({alter: true}).then(() => {
        console.log('Droppa e risincronizza il db');
        return User.findAll();
    })
    .then((users) => {
        /** Filtro che stampa gli hotels non-cancellati dalla lista */
        var newUsers = users.filter(user => Object.keys(user).length !== 0);
        return newUsers;
    })     
    .then((users) => {
        const {id}  = request.params;
        const user = users.find( (user) => {
            return user.id == id;
        });  
        response.json(user); 
    })    
    .catch((error) => {
        console.log(`ERRORE:::::::::::${error}`)
        response.status(400).json({});
    })   
};

