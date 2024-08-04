import express from "express";
import messageController from "../controllers/messageController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const routerMessage = express.Router();

// Rota para obter todas as mensagens relacionadas a um anúncio específico.
router.get(
  "/exchanges/:id/messages",
  authMiddleware,
  messageController.getMessagesByExchangeId
);

// Rota para criar uma nova mensagem.
router.post("/messages", authMiddleware, messageController.createMessage);

// Rota para marcar uma mensagem como lida
router.patch(
  "/messages/:id/read",
  authMiddleware,
  messageController.updateMessageRead
);

export default routerMessage;
