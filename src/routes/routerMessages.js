// src/controllers/routerMessages.js:
import express from 'express';
import messageController from '../controllers/messageController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const routerMessages = express.Router();

// Rota para obter todas as conversas relacionadas a um usuário.
routerMessages.get('/all', authMiddleware, messageController.getAllChatsByUserId);

// Rota para obter todas as mensagens entre dois usuários
routerMessages.get('/conversation/:usuarioRemetenteId/:usuarioDestinatarioId', authMiddleware, messageController.getMessagesBetweenUsers);

// Rota para obter uma mensagem em específico.
routerMessages.get('/:id', authMiddleware, messageController.getMessagesById);

// Rota para criar uma nova mensagem.
routerMessages.post('/', authMiddleware, messageController.createMessage);

// Rota para marcar uma mensagem como lida
routerMessages.patch('/:id/read', authMiddleware, messageController.updateMessageRead);

export default routerMessages;


