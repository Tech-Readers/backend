import exchangeModel from '../models/exchangeModel.js';
import Joi from 'joi';

// Esquema de validação com Joi: valida os dados do anúncio
const exchangeSchema = Joi.object({
  titulo: Joi.string().required(),
  descricao: Joi.string().required(),
  preco: Joi.number().positive().required(),
  categoria: Joi.string().required(),
  ativo: Joi.boolean().required(),
  data_conclusao: Joi.date().allow(null),
});

// Retorna todos os anúncios do banco de dados
const allExchanges = async () => {
  return await exchangeModel.allExchanges();
};

// Busca um anúncio pelo ID, validando a entrada e verificando se o anúncio existe
const byIdExchange = async (id) => {
  if (!id) throw new Error('ID é obrigatório.');

  const exchange = await exchangeModel.byIdExchange(id);
  if (!exchange) throw new Error('Anúncio não encontrado.');

  return exchange;
};

// Retorna todos os anúncios de um usuário específico
const exchangesByUserId = async (userId) => {
  if (!userId) throw new Error('ID do usuário é obrigatório.');

  return await exchangeModel.exchangesByUserId(userId);
};

// Valida os dados do anúncio e cria um novo anúncio no banco de dados
const createExchange = async (dataExchange) => {
  const { error } = exchangeSchema.validate(dataExchange);
  if (error) {
    throw new Error(error.details.map((detail) => detail.message).join(' '));
  }

  return await exchangeModel.createExchange(dataExchange);
};

// Valida os dados do anúncio, verifica se o anúncio existe e atualiza os dados no banco de dados
const updateExchange = async (id, dataExchange) => {
  if (!id) throw new Error('ID é obrigatório.');

  const { error } = exchangeSchema.validate(dataExchange);
  if (error) {
    throw new Error(error.details.map((detail) => detail.message).join(' '));
  }

  const exchange = await exchangeModel.byIdExchange(id);
  if (!exchange) throw new Error('Anúncio não encontrado.');

  return await exchangeModel.updateExchange(id, dataExchange);
};

// Valida o ID, verifica se o anúncio existe, e deleta o anúncio do banco de dados
const deleteExchange = async (id) => {
  if (!id) throw new Error('ID é obrigatório.');

  const exchange = await exchangeModel.byIdExchange(id);
  if (!exchange) throw new Error('Anúncio não encontrado.');

  return await exchangeModel.deleteExchange(id);
};

// Fecha um anúncio, atualizando seu estado para inativo e definindo a data de conclusão
const closeExchange = async (id) => {
  if (!id) throw new Error('ID é obrigatório.');

  const exchange = await exchangeModel.byIdExchange(id);
  if (!exchange) throw new Error('Anúncio não encontrado.');

  return await exchangeModel.closeExchange(id);
};

// Agrupa todas as funções em um objeto exchangeService e as exporta para serem usadas em outras partes da aplicação
const exchangeService = {
  allExchanges,
  byIdExchange,
  exchangesByUserId,
  createExchange,
  updateExchange,
  deleteExchange,
  closeExchange,
};

export default exchangeService;
