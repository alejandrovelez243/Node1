let app = require("./app");

let port = 2021;

app.listen(port, function() {
    console.log(`El servidor esta escuchando por el puerto ${port}`);
});

app.get('/', function(req, res) {
    res.send('Puto el que lo lea');
});