// routerReview.js
import express from 'express';
import ReviewController from '../controllers/ReviewController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const routerReviews = express.Router();

routerReviews.post('/', authMiddleware, ReviewController.createReview);    

routerReviews.get('/:anuncio_id', authMiddleware, ReviewController.byIdExchange);

routerReviews.put('/:id', authMiddleware, ReviewController.updateReview);

routerReviews.delete('/:id', authMiddleware, ReviewController.deleteReview);

routerReviews.patch('/:id', authMiddleware, ReviewController.updateLikes);

export default routerReviews;


