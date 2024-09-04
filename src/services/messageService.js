// src/models/messageSevice.js:
import messageModel from '../models/messageModel.js';
import Joi from 'joi';

const messageSchema = Joi.object({
    usuario_remetente_id: Joi.string().required(),
    usuario_destinatario_id: Joi.string().required(),
    texto: Joi.string().required(),
});


const getMessagesBetweenUsers = async (usuarioRemetenteId, usuarioDestinatarioId) => {
    if (!usuarioRemetenteId || !usuarioDestinatarioId) throw new Error('IDs dos usuários são obrigatórios.');
    
    const messages = await messageModel.getMessagesBetweenUsers(usuarioRemetenteId, usuarioDestinatarioId);
    
    if (messages.length === 0) {
      throw new Error('Não há mensagens entre esses usuários.');
    }
  
    return messages;
  };


const getAllChatsByUserId = async (userId) => {
    if (!userId) throw new Error('ID do usuário é obrigatório.');

    return await messageModel.getAllChatsByUserId(userId);
};  


const getMessagesById = async (id, user_id) => {
    if (!id) throw new Error('ID da mensagem é obrigatório.');

    const messages = await messageModel.getMessagesById(id);
    
    // filtrar mensagens que o usuário tem permissão para ver
    const filteredMessages = messages.filter(message => 
        message.usuario_remetente_id === user_id || message.usuario_destinatario_id === user_id
    );

    // verificar se o usuário está envolvido em alguma mensagem
    if (filteredMessages.length === 0) {
        throw new Error('Você não tem permissão para ver essas mensagens.');
    }

    return filteredMessages;
};

const createMessage = async (data) => {
    const { error } = messageSchema.validate(data);
    if (error) throw new Error(error.details.map(detail => detail.message).join(' '));
    return await messageModel.createMessage(data);
};

const updateMessageRead = async (id) => {
    if (!id) throw new Error('ID da mensagem é obrigatório.');
    return await messageModel.updateMessageRead(id);
};

const messageService = {
    getMessagesById,
    createMessage,
    updateMessageRead,
    getMessagesBetweenUsers,
    getAllChatsByUserId,
};

export default messageService;



