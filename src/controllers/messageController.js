import messageService from "../services/messageService.js";

// Chama o serviço allMessages para obter todas as mensagens por anuncio

const allMessages = async (req, res) => {
  try {
    const messages = await messageService.allMessages(
      req.params.id,
      req.user.id
    );
    res.status(200).json(messages);
  } catch {
    res.status(500).json({ error: error.message });
  }
};

// Chama o serviço createMessage para criar novas mensagens

const createMessage = async (req, res) => {
  try {
    const message = await messageService.createMessage(req.body);
    res.status(201).json(message);
  } catch {
    res.status(500).json({ error: error.message });
  }
};

// Chama o serviço updateMessage para atualizar as mensagens como lidas quando forem visualizadas

const updateMessage = async (req, res) => {
  try {
    const message = await messageService.updateMessage(req.params.id);
    res.status(200).json(message);
  } catch {
    res.status(500).json({ error: error.message });
  }
};

// Exporta todas as funções do controlador para serem usadas em outras partes da aplicação, como nas rotas

const messageController = {
  allMessages,
  createMessage,
  updateMessage,
};

export default messageController;
