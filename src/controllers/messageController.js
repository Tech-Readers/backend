import messageService from '../services/messageService.js';

// Chama o serviço allMessages para obter todas as mensagens por anuncio

const getMessagesByExchangeId = async (req, res) => {
  const { anuncio_id } = req.params;
  const userId = req.user.id;

  try {
    const messages = await messageService.getMessagesByExchangeId(anuncio_id, userId);
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
  getMessagesByExchangeId,
  createMessage,
  updateMessageRead,
};

export default messageController;



