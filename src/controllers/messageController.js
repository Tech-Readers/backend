// src/controllers/messageController.js:
import messageService from '../services/messageService.js';


// Chama o serviço getMessagesBetweenUsers para obter todas as mensagens trocadas entre dois usuários específicos
const getMessagesBetweenUsers = async (req, res) => {
  try {
    const { usuarioRemetenteId, usuarioDestinatarioId } = req.params; // Certifique-se de que os parâmetros estão corretos
    const messages = await messageService.getMessagesBetweenUsers(usuarioRemetenteId, usuarioDestinatarioId);
    res.status(200).json(messages);
  } catch (error) {
    if (error.message === 'Não há mensagens entre esses usuários.') {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};


// Chama o serviço getAllChatsByUserId para obter todas as conversas de um usuário
const getAllChatsByUserId = async (req, res) => {
  try {
    const userId = req.user.id; // Supondo que o ID do usuário está disponível no objeto `req.user`
    const chats = await messageService.getAllChatsByUserId(userId);
    res.status(200).json(chats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// Chama o serviço getMessagesById para obter uma mensagem especifica
const getMessagesById = async (req, res) => {
  try {
    const userId = req.user.id; // Certifique-se de que req.user.id está definido corretamente
    const messages = await messageService.getMessagesById(req.params.id, userId);
    res.status(200).json(messages);
  } catch (error) {
    if (error.message === 'Você não tem permissão para ver essas mensagens.') {
      res.status(403).json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

// Chama o serviço createMessage para criar novas mensagens
const createMessage = async (req, res) => {
  try {
    const createMessage = await messageService.createMessage(req.body);
    res.status(201).json(createMessage);
  } catch {
    res.status(500).json({ error: error.message });
  }
};


// Chama o serviço updateMessage para atualizar as mensagens como lidas quando forem visualizadas

const updateMessageRead = async (req, res) => {
  try {
    const updatedMessage = await messageService.updateMessageRead(req.params.id);
    res.status(200).json(updatedMessage);
  } catch {
    res.status(500).json({ error: error.message });
  }
};

// Exporta todas as funções do controlador para serem usadas em outras partes da aplicação, como nas rotas

const messageController = {
  getMessagesById,
  createMessage,
  updateMessageRead,
  getMessagesBetweenUsers,
  getAllChatsByUserId,
};

export default messageController;



