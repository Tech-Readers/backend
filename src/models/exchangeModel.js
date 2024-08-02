import prisma from '../config/prismaClient.js';

// Retorna todos os anúncios
const allExchanges = async () => {
  return await prisma.exchanges.findMany();
};

// Retorna um anúncio específico de acordo com o ID do anúncio
const exchangeById = async (id) => {
  return await prisma.exchanges.findUnique({
    where: { id },
  });
};

// Retorna todos os anúncios de um usuário específico de acordo com o ID do usuário
const exchangesByUserId = async (userId) => {
  return await prisma.exchanges.findMany({
    where: { userId },
  });
};

// Cria um novo anúncio
const createExchange = async (data) => {
  return await prisma.exchanges.create({
    data,
  });
};

// Fecha um anúncio (anúncio passa do estado ativo para inativo)
const closeExchange = async (id) => {
  return await prisma.exchanges.update({
    where: { id },
    data: {
      ativo: false,
      data_conclusao: new Date(),
    },
  });
};

// Atualiza os dados de um anúncio específico de acordo com o ID do anúncio
const updateExchange = async (id, data) => {
  return await prisma.exchanges.update({
    where: { id },
    data,
  });
};

// Deleta os dados de um anúncio específico de acordo com o ID do anúncio
const deleteExchange = async (id) => {
  return await prisma.exchanges.delete({
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