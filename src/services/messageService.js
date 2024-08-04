import messageModel from '../models/messageModel.js';
import Joi from 'joi';

const messageSchema = Joi.object({
    anuncio_id: Joi.number().required(),
    usuario_remetente_id: Joi.number().required(),
    usuario_destinatario_id: Joi.number().required(),
    texto: Joi.string().required(),
});

const getMessagesByExchangeId = async (anuncio_id, user_id) => {
    if (!anuncio_id) throw new Error('ID do anúncio é obrigatório.');

    const messages = await messageModel.getMessagesByExchangeId(anuncio_id);
    
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
    getMessagesByExchangeId,
    createMessage,
    updateMessageRead,
};

export default messageService;



