import { connect } from 'react-redux'
import YourReviews from './your_reviews'
import { fetchReviews, deleteReview } from '../actions/review_actions'

const mSTP = state => {
    let allReviews = Object.values(state.entities.reviews)
    let currUser = state.session.currentUser
    let myReviews = []

    allReviews.forEach((review) => {
        if (review.reviewer_id === currUser) {
            debugger

            myReviews.push(review)
        }
    })

    return {
        reviews: myReviews,
        currUser
    }
}

const mDTP = dispatch => {
    return {
        fetchReviews: () => dispatch(fetchReviews()), 
        deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
    }
}

export default connect(mSTP, mDTP)(YourReviews)