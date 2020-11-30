import * as ReviewAPIUtil from '../util/review_api_util'

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS"
export const RECEIVE_REVIEW = "RECEIVE_REVIEW"
export const REMOVE_REVIEW = "REMOVE_REVIEW"
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS"
export const REMOVE_REVIEW_ERRORS = "REMOVE_REVIEW_ERRORS"

const receiveAllReviews = reviews => {
    return {
        type: RECEIVE_ALL_REVIEWS, 
        reviews
    }
}

const receiveReview = review => {
    return {
        type: RECEIVE_REVIEW, 
        review
    }
}

const removeReview = reviewId => {
    return {
        type: REMOVE_REVIEW, 
        reviewId
    }
}

const receiveReviewErrors = errors => {
    return {
        type: RECEIVE_REVIEW_ERRORS, 
        errors
    }
}


export const removeReviewErrors = () => {
    return {
        type: REMOVE_REVIEW_ERRORS
    }
}

export const fetchReviews = () => {
    return (dispatch => {
        return ReviewAPIUtil.fetchReviews()
            .then(reviews => {
                return dispatch(receiveAllReviews(reviews))
            }, error => {
                return dispatch(receiveReviewErrors(error.responseJSON))
            })
    })
}

export const fetchReview = (reviewId) => {
    return (dispatch => {
        return ReviewAPIUtil.fetchReview(reviewId)
            .then(review => {
                return dispatch(receiveReview(review))
            }, error => {
                return dispatch(receiveReviewErrors(error.responseJSON))
            })
    })
}

export const createReview = (review) => {
    return (dispatch => {
        return ReviewAPIUtil.createReview(review)
            .then(newreview => {
                return dispatch(receiveReview(newreview))
            }, error => {
                return dispatch(receiveReviewErrors(error.responseJSON))
            })
    })
}

export const updateReview = (review) => {
    return (dispatch => {
        return ReviewAPIUtil.updateReview(review)
            .then(updatedreview => {
                return dispatch(receiveReview(updatedreview))
            }, error => {
                return dispatch(receiveReviewErrors(error.responseJSON))
            })
    })
}

export const deleteReview = (reviewId) => {
    debugger
    
    return (dispatch => {
        return ReviewAPIUtil.deleteReview(reviewId)
            .then(() => {
                return dispatch(removeReview(reviewId))
            }, error => {
                return dispatch(receiveReviewErrors(error.responseJSON))
            })
    })
}

