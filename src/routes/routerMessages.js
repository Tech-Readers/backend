import express from 'express';
import messageController from '../controllers/messageController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const routerMessages = express.Router();

// Rota para obter todas as mensagens relacionadas a um anúncio específico.
routerMessages.get('/exchanges/:anuncio_id', authMiddleware, messageController.getMessagesByExchangeId);

// Rota para criar uma nova mensagem.
routerMessages.post('/', authMiddleware, messageController.createMessage);

// Rota para marcar uma mensagem como lida
routerMessages.patch('/:id/read', authMiddleware, messageController.updateMessageRead);

export default routerMessages;


