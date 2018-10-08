let express = require('express');
let bodyParser = require('body-parser');

let app = express();
let rutas = require('./Rutas/saludo')
let rutasMontoEscrito = require('./Rutas/montoEscrito')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configurar las cabeceras http. son para evitar problemas de control de acceso
//El next es para salir del middelware y pasar a otra función.
app.use((req, res, next) => {
    //Con lo siguiente permitimos acceso a todos los dominios.
    res.header('Access-Control-Allow-Origin', '*');
    //Para que funcione a nivel de Ajax
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    //Indicamos los metodos que se van a soportar
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');

    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    //Salir del middleware y continuar con el flujo normal de ejecución, con una ruta concreta de un metodo de un controaldor
    next();
});

app.use('/api', rutas);
app.use('/api', rutasMontoEscrito);
module.exports = app;