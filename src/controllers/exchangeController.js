import exchangeService from '../services/exchangeService.js';

// Chama o serviço allExchanges para obter todos os anúncios
// Retorna os anúncios com status 200 (OK) em caso de sucesso
// Retorna uma mensagem de erro com status 500 (Internal Server Error) em caso de falha
const allExchanges = async (req, res) => {
  try {
    const exchanges = await exchangeService.allExchanges();
    res.status(200).json(exchanges);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Chama o serviço exchangeById para obter um anúncio pelo ID
// Se o anúncio não for encontrado, retorna status 404 (Not Found)
// Retorna o anúncio com status 200 (OK) em caso de sucesso
// Retorna uma mensagem de erro com status 500 (Internal Server Error) em caso de falha
const exchangeById = async (req, res) => {
  try {
    const exchange = await exchangeService.exchangeById(req.params.id);
    if (!exchange) {
      return res.status(404).json({ error: 'Anúncio não encontrado' });
    }
    res.status(200).json(exchange);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Chama o serviço exchangesByUserId para obter todos os anúncios de um usuário específico
// Retorna os anúncios com status 200 (OK) em caso de sucesso
// Retorna uma mensagem de erro com status 500 (Internal Server Error) em caso de falha
const exchangesByUserId = async (req, res) => {
  try {
    const exchanges = await exchangeService.exchangesByUserId(req.params.anunciante_id);
    res.status(200).json(exchanges);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Chama o serviço createExchange para criar um novo anúncio com os dados fornecidos no corpo da requisição
// Retorna o anúncio criado com status 201 (Created) em caso de sucesso
// Retorna uma mensagem de erro com status 500 (Internal Server Error) em caso de falha
const createExchange = async (req, res) => {
  try {
    const exchange = await exchangeService.createExchange(req.body);
    res.status(201).json(exchange);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Chama o serviço updateExchange para atualizar os dados do anúncio com o ID fornecido
// Retorna o anúncio atualizado com status 200 (OK) em caso de sucesso
// Retorna uma mensagem de erro com status 500 (Internal Server Error) em caso de falha
const updateExchange = async (req, res) => {
  try {
    const exchange = await exchangeService.updateExchange(req.params.id, req.body);
    res.status(200).json(exchange);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Chama o serviço deleteExchange para excluir o anúncio com o ID fornecido
// Retorna status 204 (No Content) em caso de sucesso (sem conteúdo de resposta)
// Retorna uma mensagem de erro com status 500 (Internal Server Error) em caso de falha
const deleteExchange = async (req, res) => {
  try {
    await exchangeService.deleteExchange(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Chama o serviço closeExchange para fechar um anúncio (tornar inativo) com o ID fornecido
// Retorna o anúncio atualizado com status 200 (OK) em caso de sucesso
// Retorna uma mensagem de erro com status 500 (Internal Server Error) em caso de falha
const closeExchange = async (req, res) => {
  try {
    const exchange = await exchangeService.closeExchange(req.params.id);
    res.status(200).json(exchange);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Exporta todas as funções do controlador para serem usadas em outras partes da aplicação, como nas rotas
const exchangeController = {
  allExchanges,
  exchangeById,
  exchangesByUserId,
  createExchange,
  updateExchange,
  deleteExchange,
  closeExchange,
};

export default exchangeController;



