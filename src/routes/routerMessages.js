import express from 'express';
import messageController from '../controllers/messageController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const routerMessages = express.Router();

// Rota para obter todas as mensagens relacionadas a um anúncio específico.
routerMessages.get('/exchanges/:id/messages', authMiddleware, messageController.getMessagesByExchangeId);

// Rota para criar uma nova mensagem.
routerMessages.post('/messages', authMiddleware, messageController.createMessage);

// Rota para marcar uma mensagem como lida
routerMessages.patch('/messages/:id/read', authMiddleware, messageController.updateMessageRead);

export default routerMessages;


