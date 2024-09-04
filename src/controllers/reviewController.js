// src/controllers/reviewController.js:
import reviewService from '../services/reviewService.js'


const byIdExchange = async (req, res) => {
	try {
		const review = await reviewService.byIdExchange(req.params.anuncio_id);
		if(!review) {
			res.status(404).json({error: 'Anúncio não encontrado'})
		}

		res.status(200).json(review);
	} catch (error) {
		res.status(500).json({error: error.message});
	};
};


const createReview = async (req, res) => {
	try {
		const review = await reviewService.createReview(req.body);
		res.status(201).json(review);
	} catch (error) {
		res.status(500).json({error: error.message});
	};
};

const updateReview = async (req, res) => {
	try {
		const review = await reviewService.updateReview(req.params.id, req.body);
		res.status(200).json(review);
	} catch (error) {
		res.status(500).json({error: error.message});
	};
};


const deleteReview = async (req, res) => {
	try {
		await reviewService.deleteReview(req.params.id);
		res.status(204).send();
	} catch (error) {
		res.status(500).json({error: error.message});
	};
};

const updateLikes = async (req, res) => {
	try {
		const review = await reviewService.updateLikes(req.params.id, req.body);
		res.status(200).json(review);
	} catch (error) {
		res.status(500).json({error: error.message});
	};
};


const reviewController = {
  	byIdExchange,
  	createReview,
 	updateReview,
  	deleteReview,
	updateLikes,
}

export default reviewController;



