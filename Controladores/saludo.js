function saludo(req, res) {
    res.status(200).send({
        "respuesta": "Te estoy llamando desde la prisión",
    });
};


function adios(req, res) {
    res.status(200).send({
        "respuesta": "Te estoy llamando, por que necesito mas de ti",
    });
};
module.exports = { saludo, adios };