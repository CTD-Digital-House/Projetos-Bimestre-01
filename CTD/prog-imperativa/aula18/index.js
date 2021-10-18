// 1. Importando o módulo Express
const express = require ('express');

// 2. Inicializando o Express
const aplicativo = new express ();

// Definir as rotas
aplicativo.get('/', function(requisicaoAoServidor, respostaDoServidor) {
    // 3.1. Manda uma resposta para o navegador.
    respostaDoServidor.send('Teste1'); 
});

aplicativo.get('/sobre', (req, res) => res.send('Teste2'));

aplicativo.get('/html', (req, res) => res.sendFile(__dirname + '/arquivoHtml/index.html'));

// Definir a porta para acesso a aplicação
aplicativo.listen(8080);
