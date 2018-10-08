let express = require('express');

let controladorSaludo = require('../Controladores/saludo');

let api = express.Router();

api.get('/perro-con-hambre', controladorSaludo.saludo);
api.post('/perro-mateo', controladorSaludo.adios);
module.exports = api;