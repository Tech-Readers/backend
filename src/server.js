//server.js:
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routerUsers from './routes/routerUsers.js'
import routerExchanges from './routes/routerExchanges.js';
import routerMessages from './routes/routerMessages.js';
import routerReviews from './routes/routerReviews.js';

// dotenv para carregar variáveis de ambiente de um arquivo
dotenv.config();

// cria uma instância express
const app = express();

// carrega a variável de ambiente do arquivo .env para process.env
// define a porta em que o servidor vai escutar. Se a variável de ambiente PORT não estiver definida, usa a porta 8000 por padrão
const PORT = process.env.PORT || 8000;

// módulo CORS para permitir ou restringir requisições de diferentes domínios

// habilita o cors para permitir requisições de outros domínios
app.use(cors());

// habilita o middleware de parsing de JSON para que o servidor possa interpretar requisições em JSON
app.use(express.json());

// define que todas as rotas relacionadas aos usuários estarão no caminho /users e serão tratadas pelas rotas definidas em userRouters
app.use('/users', routerUsers);

app.use('/exchanges', routerExchanges); 

app.use('/messages', routerMessages); // NÃO IMPLEMENTADO AS ROTAS DE MENSAGENS

app.use('/reviews', routerReviews); // NÃO IMPLEMENTADO AS ROTAS DE AVALIAÇÕES


// inicia o servidor para escutar na porta definida
app.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`)
})





