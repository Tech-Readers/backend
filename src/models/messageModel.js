import prisma from "../config/prismaClient.js";

// Retorna todas as mensagens trocada por dois usuarios referentes a um anúncio específico de acordo com o ID do anúncio.
const getMessagesByExchangeId = async (anuncio_id) => {
    return await prisma.mensagens.findMany({
        where: { anuncio_id },
        include: {
            enderecos: true,
            telefones: true,
        },
    });
};

// Envia mensagens referentes a um anúncio específico de acordo com o ID do anúncio (ID do anúncio 
const createMessage = async (dataMessage) => {
    return await prisma.mensagens.create({
        data: {
            texto: dataMessage.texto,
            anuncio_id: dataMessage.anuncio_id,
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
    getMessagesByExchangeId,
    createMessage,
    updateMessageRead,
  };
  
  export default messageModel;
  




