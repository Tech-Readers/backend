import express from 'express';
import exchangeController from '../controllers/exchangeController';


//Cria uma instância do router do express para definir as rotas relacionadas aos anuncios
const routerExchange = express.Router();

// GET / --> Chama o método allExchanges do exchangeController para obter todos os anuncios
routerExchange.get('/', exchangeController.allExchanges); 

// GET /:id --> Chama o método byIdExchange do exchangeController para obter um anuncio específico pelo ID
routerExchange.get('/:id', exchangeController.byIdExchange);

// GET /:userId --> Chama o método exchangesByUserId para obter todos os anúncios de um usuário específico
routerExchange.get('/:userId',exchangeController.exchangesByUserId);

// POST / --> Cria um novo anuncio
routerExchange.post('/',exchangeController.createExchange);


// PUT /:id --> Atualiza os dados de um anúncio específico de acordo com o ID do anúncio
routerExchange.put('/:id',exchangeController.updateExchange);


// DELETE /:id --> Deleta os dados de um anúncio específico de acordo com o ID do anúncio;
routerExchange.delete('/:id',exchangeController.deleteExchange);


// PATH /:id --> Fecha um anúncio (anúncio passa do estado ativo para inativo, 
//altera "ativo: TRUE" para "ativo: FALSE" e insere o valor da "data_conclusão");
routerExchange.patch('/:id',exchangeController.closeExchange);

export default routerExchange;