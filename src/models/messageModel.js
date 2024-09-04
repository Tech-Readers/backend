// src/models/messageModel.js:
import prisma from "../config/prismaClient.js";

// Retorna todas as mensagens trocadas entre dois usuários específicos
const getMessagesBetweenUsers = async (usuarioRemetenteId, usuarioDestinatarioId) => {
    return await prisma.mensagens.findMany({
      where: {
        OR: [
          { usuario_remetente_id: usuarioRemetenteId, usuario_destinatario_id: usuarioDestinatarioId },
          { usuario_remetente_id: usuarioDestinatarioId, usuario_destinatario_id: usuarioRemetenteId }
        ]
      },
      orderBy: {
        data_envio: 'asc' // Ordena por data de envio em ordem crescente
      }
    });
  };


// Retorna todas as conversas associadas a um usuário
const getAllChatsByUserId = async (userId) => {
    return await prisma.mensagens.findMany({
        where: {
            OR: [
                { usuario_remetente_id: userId },
                { usuario_destinatario_id: userId }
            ]
        },
        distinct: ['usuario_destinatario_id', 'usuario_remetente_id'],
        orderBy: {
            data_envio: 'desc',
        },
    });
};  


// Retorna uma mensagem especifica 
const getMessagesById = async (id) => {
    return await prisma.mensagens.findMany({
        where: { id },
    });
};



// Envia mensagens referentes a um anúncio específico de acordo com o ID do anúncio (ID do anúncio 
const createMessage = async (dataMessage) => {
    return await prisma.mensagens.create({
        data: {
            texto: dataMessage.texto,
            usuario_destinatario_id: dataMessage.usuario_destinatario_id,
            usuario_remetente_id: dataMessage.usuario_remetente_id
        },
    });
};


// Marca mensagem como lida (altera "lido: FALSE" para "lido: TRUE").
const updateMessageRead = async (id) => {
    return await prisma.mensagens.update({
        where: {id},
        data: {lido: true},
    });
};


// exportadas para que possam ser usadas em outras partes da aplicação
const messageModel = {
    getMessagesById,
    createMessage,
    updateMessageRead,
    getMessagesBetweenUsers,
    getAllChatsByUserId,
  };
  
  export default messageModel;
  




