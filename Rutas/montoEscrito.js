let express = require('express');

let controladorMontoEscrito = require('../Controladores/montoEscrito');

let api = express.Router();

api.post('/monto-escrito', controladorMontoEscrito.valor);
module.exports = api;