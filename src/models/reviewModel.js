import prisma from '../config/prismaClient.js';

const byIdExchange = async(anuncio_id) => {
	return await prisma.avaliacoes.findMany({
		where: {anuncio_id}
	});
};

const createReview = async(dataReview) => {
	return await prisma.avaliacoes.create({
		data: {
			nota: dataReview.nota,
			comentario: dataReview.comentario,
			usuario_avaliador_id: dataReview.usuario_avaliador_id,
			anuncio_id: dataReview.anuncio_id,
		},
		
	});
};

const updateReview = async(id, dataReview) => {
	const updatedReview = await prisma.avaliacoes.update({
	  where: {id},
	  data: {
     		nota: dataReview.nota,
			comentario: dataReview.comentario,
			data_avaliacao: dataReview.data_avaliacao,
			usuario_avaliador_id: dataReview.usuario_avaliador_id,
			anuncio_id: dataReview.anuncio_id,
	  },
	 
	});
  
	return updatedReview;
  };
  

const deleteReview = async(id) => {
	const Review = await prisma.avaliacoes.findUnique({
	  where: { id },
	});
  
	if (Review) {
  
	  await prisma.avaliacoes.delete({
		where: { id },
	  });
  
	}
  
	return Review;
};
  
const updateLikes = async(id, dataReview) => {
	const updatedReview = await prisma.avaliacoes.update({
	  where: {id},
	  data: {
     		qtd_like: dataReview.qtd_like
	  },
	 
	});
  
	return updatedReview;
  };

const ReviewModel = {
  byIdExchange,
  createReview,
  updateReview,
  deleteReview,
  updateLikes,
};

export default ReviewModel;


