// routerExchange.js:
import express from 'express';
import exchangeController from '../controllers/exchangeController.js';
import authMiddleware from '../middleware/authMiddleware.js';


//Cria uma instância do router do express para definir as rotas relacionadas aos anuncios
const routerExchanges = express.Router();

// GET / --> Chama o método allExchanges do exchangeController para obter todos os anuncios
routerExchanges.get('/', authMiddleware, exchangeController.allExchanges); 

// GET /:id --> Chama o método exchangeById do exchangeController para obter um anuncio específico pelo ID
routerExchanges.get('/:id', authMiddleware, exchangeController.exchangeById);

// GET /:userId --> Chama o método exchangesByUserId para obter todos os anúncios de um usuário específico
routerExchanges.get('/user/:anunciante_id', authMiddleware, exchangeController.exchangesByUserId);

// POST / --> Cria um novo anuncio
routerExchanges.post('/', authMiddleware, exchangeController.createExchange);


// PUT /:id --> Atualiza os dados de um anúncio específico de acordo com o ID do anúncio
routerExchanges.put('/:id', authMiddleware, exchangeController.updateExchange);


// DELETE /:id --> Deleta os dados de um anúncio específico de acordo com o ID do anúncio;
routerExchanges.delete('/:id', authMiddleware, exchangeController.deleteExchange);


// PATH /:id --> Fecha um anúncio (anúncio passa do estado ativo para inativo, 
//altera "ativo: TRUE" para "ativo: FALSE" e insere o valor da "data_conclusão");
routerExchanges.patch('/:id', authMiddleware, exchangeController.closeExchange);

export default routerExchanges;



