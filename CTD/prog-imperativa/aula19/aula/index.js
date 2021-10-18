// Importar O MÓDULO eXPRESS
const { application } = require('express');
const express = require('express');
const cadastrar = require('.cadastrar');

// Iniciar o construtor do Express
const aplicativo = express();


// Interceptador. Executar um trecho do código antes da rota ser executada. Precisa ser inicializado antes de todas as declarações de rotas
// aplicativo.use('/cadastrar', (requisicaoAoServidor, respostaDoServidor) => respostaDoServidor.senD ('Interceptador'));

aplicativo.use(express.json()); //Converte em JSON
aplicativo.use(express.urlencoded({extended: true})) //Certificar que o JSON será entregue 

// Criando a rota e retornando um texto
aplicativo.get('/', (requisicaoAoServidor, respostaDoServidor) => respostaDoServidor.sendFile (__dirname + '/cadastrar.html'));




// Criar uma rota para receber para receber dados do formulário
// aplicativo.post ('/', (requisicaoAoServidor, respostaDoServidor) => respostaDoServidor.send ('Enviado com sucesso'));

aplicativo.post('/cadastar' , (requisicaoAoServidor, respostaDoServidor) => {
    const {nome, sobrenome} = requisicaoAoServidor.body;
    new cadastrar(nome, sobrenome);

    respostaDoServidor.send('Cadastrou!');

});

// aplicativo.post ('/cadastrar', (requisicaoAoServidor, respostaDoServidor) => respostaDoServidor.json (requisicaoAoServidor.body));

// Inicializa o servidor
aplicativo.listen(8083, () => console.log ('Servidor está funcionando'));