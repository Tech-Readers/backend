// routerExchange.js:
import express from 'express';
import exchangeController from '../controllers/exchangeController.js';


//Cria uma instância do router do express para definir as rotas relacionadas aos anuncios
const routerExchanges = express.Router();

// GET / --> Chama o método allExchanges do exchangeController para obter todos os anuncios
routerExchanges.get('/', exchangeController.allExchanges); 

// GET /:id --> Chama o método exchangeById do exchangeController para obter um anuncio específico pelo ID
routerExchanges.get('/:id', exchangeController.exchangeById);

// GET /:userId --> Chama o método exchangesByUserId para obter todos os anúncios de um usuário específico
routerExchanges.get('/user/:anunciante_id',exchangeController.exchangesByUserId);

// POST / --> Cria um novo anuncio
routerExchanges.post('/', exchangeController.createExchange);


// PUT /:id --> Atualiza os dados de um anúncio específico de acordo com o ID do anúncio
routerExchanges.put('/:id', exchangeController.updateExchange);


// DELETE /:id --> Deleta os dados de um anúncio específico de acordo com o ID do anúncio;
routerExchanges.delete('/:id', exchangeController.deleteExchange);


// PATH /:id --> Fecha um anúncio (anúncio passa do estado ativo para inativo, 
//altera "ativo: TRUE" para "ativo: FALSE" e insere o valor da "data_conclusão");
routerExchanges.patch('/:id',exchangeController.closeExchange);

export default routerExchanges;



