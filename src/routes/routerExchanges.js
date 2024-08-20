import express from 'express';
import exchangeController from '../controllers/exchangeController.js';
import authMiddleware from '../middleware/authMiddleware.js';
import upload from '../middleware/uploadMulter.js';

//Cria uma instância do router do express para definir as rotas relacionadas aos anuncios
const routerExchanges = express.Router();

// GET / --> Chama o método allExchanges do exchangeController para obter todos os anuncios
routerExchanges.get('/', authMiddleware, exchangeController.allExchanges); // ok

// GET /:id --> Chama o método exchangeById do exchangeController para obter um anuncio específico pelo ID
routerExchanges.get('/:id', authMiddleware, exchangeController.exchangeById); // ok

// GET /:userId --> Chama o método exchangesByUserId para obter todos os anúncios de um usuário específico
routerExchanges.get('/user/:anunciante_id', authMiddleware, exchangeController.exchangesByUserId); // ok

// POST / --> Cria um novo anuncio
routerExchanges.post('/', upload.single('image'), authMiddleware, exchangeController.createExchange); // ok


// PUT /:id --> Atualiza os dados de um anúncio específico de acordo com o ID do anúncio
routerExchanges.put('/:id', upload.single('image'), authMiddleware, exchangeController.updateExchange); // ok


// DELETE /:id --> Deleta os dados de um anúncio específico de acordo com o ID do anúncio;
routerExchanges.delete('/:id', authMiddleware, exchangeController.deleteExchange);


// PATH /:id --> Fecha um anúncio (anúncio passa do estado ativo para inativo, 
//altera "ativo: TRUE" para "ativo: FALSE" e insere o valor da "data_conclusão");
routerExchanges.patch('/:id', authMiddleware, exchangeController.closeExchange);

export default routerExchanges;



