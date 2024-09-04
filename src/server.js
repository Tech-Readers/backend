// src/serve.js:
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routerUsers from './routes/routerUsers.js'
import routerExchanges from './routes/routerExchanges.js';
import routerMessages from './routes/routerMessages.js';
import routerReviews from './routes/routerReviews.js';
import cookieParser from 'cookie-parser';

// dotenv para carregar variáveis de ambiente de um arquiv
dotenv.config();

// cria uma instância express
const app = express();

// carrega a variável de ambiente do arquivo .env para process.env
// define a porta em que o servidor vai escutar. Se a variável de ambiente PORT não estiver definida, usa a porta 8000 por padrão
const PORT = process.env.PORT;

// módulo CORS para permitir ou restringir requisições de diferentes domínios


// app.use(cors());
// habilita o cors para permitir requisições de outros domínios e permitir cookies
app.use(cors({
	origin: process.env.URL, // Substitua pelo URL do seu frontend
	credentials: true, // Permite envio de cookies
}));


// app.use(express.json());
// Middleware para parsing de cookies
app.use(cookieParser());
  
// habilita o middleware de parsing de JSON para que o servidor possa interpretar requisições em JSON
app.use(express.json());

// define que todas as rotas relacionadas aos usuários estarão no caminho /users e serão tratadas pelas rotas definidas em userRouters
app.use('/users', routerUsers);

app.use('/exchanges', routerExchanges); 

app.use('/messages', routerMessages);

app.use('/reviews', routerReviews); 


// inicia o servidor para escutar na porta definida
app.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`)
})





