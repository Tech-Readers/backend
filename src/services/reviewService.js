import reviewModel from '../models/reviewModel.js';
import Joi from 'joi';


const reviewSchema = Joi.object({
  nota: Joi.number().required(),
  comentario: Joi.string().optional(),
  qtd_like: Joi.number().optional(),
  usuario_avaliador_id: Joi.string().required(),
  anuncio_id: Joi.string().required(),

});

const LikeSchema = Joi.object({
  qtd_like: Joi.number().optional(),
});

const byIdExchange = async (anuncio_id) => {
  if (!anuncio_id) throw new Error('ID é obrigatório.');

  const review = await reviewModel.byIdExchange(anuncio_id);
  if (!review) throw new Error('Anúncio não encontrado.');

  return review;
};

const createReview = async (dataReview) => {
  const { error } = reviewSchema.validate(dataReview);
  if (error) {
    throw new Error(error.details.map((detail) => detail.message).join(' '));
  }

  return await reviewModel.createReview(dataReview);
};

const updateReview = async (id, dataReview) => {
  if (!id) throw new Error('ID é obrigatório.');

  const { error } = reviewSchema.validate(dataReview);
  if (error) {
    throw new Error(error.details.map((detail) => detail.message).join(' '));
  };

  
  return await reviewModel.updateReview(id, dataReview);
};


const deleteReview = async (id) => {
  if (!id) throw new Error('ID é obrigatório.');

  const review = await reviewModel.byIdExchange(id);
  if (!review) throw new Error('Anúncio não encontrado.');

  return await reviewModel.deleteReview(id);
};

const updateLikes = async (id, dataReview) => {
  if (!id) throw new Error('ID é obrigatório.');

  const { error } = LikeSchema.validate(dataReview);
  if (error) {
    throw new Error(error.details.map((detail) => detail.message).join(' '));
  };

  
  return await reviewModel.updateLikes(id, dataReview);
};
const reviewService = {
  byIdExchange,
  createReview,
  updateReview,
  deleteReview,
  updateLikes,
};

export default reviewService;
