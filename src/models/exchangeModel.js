// exchangeModel:
import prisma from '../config/prismaClient.js';

// Retorna todos os anúncios
const allExchanges = async () => {
  return await prisma.anuncios.findMany();
};

// Retorna um anúncio específico de acordo com o ID do anúncio
const exchangeById = async (id) => {
  return await prisma.anuncios.findUnique({
    where: { id },
  });
};

// Retorna todos os anúncios de um usuário específico de acordo com o ID do usuário
const exchangesByUserId = async (anunciante_id) => {
  return await prisma.anuncios.findMany({
    where: {anunciante_id},
  });
};

// Cria um novo anúncio
const createExchange = async (dataExchange) => {
  return await prisma.anuncios.create({
    data: {
      titulo: dataExchange.titulo,
      titulo_livro_oferecido: dataExchange.titulo_livro_oferecido,
      autor_livro_oferecido: dataExchange.autor_livro_oferecido,
      genero_livro_oferecido: dataExchange.genero_livro_oferecido,
      titulo_livro_solicitado: dataExchange.titulo_livro_solicitado,
      autor_livro_solicitado: dataExchange.autor_livro_solicitado,
      genero_livro_solicitado: dataExchange.genero_livro_solicidado,
      descricao: dataExchange.descricao,
      anunciante_id: dataExchange.anunciante_id
    },
  });
};



// Fecha um anúncio (anúncio passa do estado ativo para inativo)
const closeExchange = async (id) => {
  return await prisma.anuncios.update({
    where: { id },
    data: {
      ativo: false,
      data_conclusao: new Date(),
    },
  });
};

// Atualiza os dados de um anúncio específico de acordo com o ID do anúncio
const updateExchange = async (id, dataExchange) => {
  const updateExchange = await prisma.anuncios.update({
    where: { id },
    data: {
      titulo: dataExchange.titulo,
      titulo_livro_oferecido: dataExchange.titulo_livro_oferecido,
      autor_livro_oferecido: dataExchange.autor_livro_oferecido,
      genero_livro_oferecido: dataExchange.genero_livro_oferecido,
      titulo_livro_solicitado: dataExchange.titulo_livro_solicitado,
      autor_livro_solicitado: dataExchange.autor_livro_solicitado,
      genero_livro_solicidado: dataExchange.genero_livro_solicidado,
      descricao: dataExchange.descricao,
    },
  });
  return updateExchange;
};

// Deleta os dados de um anúncio específico de acordo com o ID do anúncio
const deleteExchange = async (id) => {
  return await prisma.anuncios.delete({
    where: { id },
  });
};

const exchangeModel = {
  allExchanges,
  exchangeById,
  exchangesByUserId,
  createExchange,
  closeExchange,
  updateExchange,
  deleteExchange,
};

export default exchangeModel;


