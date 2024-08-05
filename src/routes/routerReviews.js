import express from 'express';
import reviewController from '../controllers/reviewController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const routerReviews = express.Router();

routerReviews.post('/', authMiddleware, reviewController.createReview);    

routerReviews.get('/:anuncio_id', authMiddleware, reviewController.byIdExchange);

routerReviews.put('/:id', authMiddleware, reviewController.updateReview);

routerReviews.delete('/:id', authMiddleware, reviewController.deleteReview);

routerReviews.patch('/:id', authMiddleware, reviewController.updateLikes);

export default routerReviews;


