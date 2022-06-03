/** Configurazione */ 
const { application } = require('express');
const express = require('express');
const router = express.Router();

/* Instanziamo app */ 
const app = express();

/* Middleware usato per recepire la request del post */ 
router.use(express.json());
router.use(express.urlencoded({extended: false}));

/* Importo del controller */
const controller = require("../controllers/user.controller");

/* Middleware per verifica della registrazione */
const verifySignUp = require('../middleware/verifySignUp');

/* Middleware di autenticazione che controlla se ad ogni richiesta c'è un token di autenticazione allegato */ 
const { authJwt } = require("../middleware");

/* REGISTRAZIONE UTENTE */
router.post('/api/v1/signup', controller.signup); 

/* LOGIN UTENTE */ 
router.post('/api/v1/login', controller.login); 

/* GET SINGOLO UTENTE */ 
router.get('/api/v1/users/:id', controller.getUser);

/* Export dei router in server.js */ 
module.exports = router;