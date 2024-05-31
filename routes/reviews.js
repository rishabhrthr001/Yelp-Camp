const express = require('express');
const{validateReview,isLoggedIn,isReviewAuthor}=require('../middleware');
const router = express.Router({ mergeParams: true });
const reviews= require('../controllers/reviews');



const Campground = require('../models/campground');
const Review = require('../models/review');

const { reviewSchema } = require('../schemas.js');


const ExpressError = require('../utils/ExpressError');
const catchAsync = require('../utils/catchAsync');



router.post('/', isLoggedIn, validateReview, catchAsync(reviews.createReviews))

router.delete('/:reviewId', isLoggedIn,isReviewAuthor,catchAsync(reviews.deleteReviews))

module.exports = router;