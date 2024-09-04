// src/models/exchangeModel.js:
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
      genero_livro_solicitado: dataExchange.genero_livro_solicitado,
      descricao: dataExchange.descricao,
      anunciante_id: dataExchange.anunciante_id,
      image: dataExchange.image
    },
  });
};



// Alterna o estado de um anúncio (de ativo para inativo e vice-versa)
const exchangeState = async (id) => {
  // Primeiro, buscamos o estado atual do anúncio
  const exchange = await prisma.anuncios.findUnique({
    where: { id },
  });

  if (!exchange) {
    throw new Error('Anúncio não encontrado');
  }

  // Alteramos o estado de "ativo" para o oposto do que ele é atualmente
  const newState = !exchange.ativo;

  return await prisma.anuncios.update({
    where: { id },
    data: {
      ativo: newState,
      data_conclusao: newState ? null : new Date(), // Define data_conclusao somente quando inativo
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
      genero_livro_solicitado: dataExchange.genero_livro_solicitado,
      descricao: dataExchange.descricao,
      image: dataExchange.image,
    },
  });
  return updateExchange;
};

// Deleta os dados de um anúncio específico de acordo com o ID do anúncio
const deleteExchange = async (id) => {
  const exchange = await prisma.anuncios.findUnique({
    where: { id },
  });

  if (exchange) {
	  
	  // Deleta o usuário
	  await prisma.anuncios.delete({
		where: { id },
	  });
  }  
  return exchange;
};

const exchangeModel = {
  allExchanges,
  exchangeById,
  exchangesByUserId,
  createExchange,
  exchangeState,
  updateExchange,
  deleteExchange,
};

export default exchangeModel;


