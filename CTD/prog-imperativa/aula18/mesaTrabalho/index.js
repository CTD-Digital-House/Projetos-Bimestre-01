
const express = require('express')

const aplicativo = new express ();

aplicativo.get ('/', function (requisicaoAoServidor, respostaDoServidor){
    respostaDoServidor.sendFile(__dirname + '/arquivohtml/index.html')
})



aplicativo.listen (8080)