import { connect } from 'react-redux'
import YourReviews from './your_reviews'
import { fetchReviews } from '../actions/review_actions'

const mSTP = state => {
    debugger

    let allReviews = Object.values(state.entities.reviews)
    let currUser = state.session.currentUser
    let myReviews = []

    allReviews.forEach((review) => {
        if (review.reviewer_id === currUser) {
            debugger

            myReviews.push(review)
        }
    })

    debugger

    return {
        reviews: myReviews,
        currUser
    }
}

const mDTP = dispatch => {
    return {
        fetchReviews: () => dispatch(fetchReviews())
    }
}

export default connect(mSTP, mDTP)(YourReviews)