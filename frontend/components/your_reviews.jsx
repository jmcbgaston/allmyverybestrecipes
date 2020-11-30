import React from 'react'
import { Link } from 'react-router-dom'

class YourReviews extends React.Component {
    constructor(props) {
        super(props)
        this.removeReview = this.removeReview.bind(this)
    }

    componentDidMount() {
        this.props.fetchReviews();
    }
    
    componentDidUpdate() {
        this.props.fetchReviews();
    }

    removeReview(e) {
        e.preventDefault()

        // let tempList = this.props.shoppingList
        // let cloneList = { ...tempList }
        
        // let newList = cloneList.items.filter(item => item !== e.currentTarget.closest('li').innerText.slice(1))
        debugger
        
        // cloneList.items = newList
        let reviewId = parseInt(e.currentTarget.closest('ul').id)
        debugger

        this.props.deleteReview(reviewId)
        // .then(this.props.fetchReviews())
    }
    
    render() {
        let reviews = this.props.reviews.map((review, idx) => {
            return(
                <ul className="your-reviews-ul" id={review.id} key={idx}>

                    <button 
                    className="toggle-negative"
                    onClick={this.removeReview}>-</button>

                    <li className="ul-rating">    
                        {review.rating}/5
                    </li>

                    <li className="ul-body">    
                        {review.body}
                    </li>

                    <Link to={`/recipes/${review.recipe_id}`}>Go to recipe</Link>

                </ul>
            )
        })

        if (reviews.length > 0) {
            return(
                <div className="your-reviews">
                    <ul className="top-level-ul">
                        {/* <ul className="review-legend">
                            <button className="pseudo-button"></button>
                            <li>Rating</li>
                            <li>Review</li>
                            <li></li>
                        </ul> */}
                        {reviews}
                    </ul>
                </div>
            )
        } else {
            return(
                <div className="your-reviews-empty">
                    <ul className="top-level-ul">
                        <li>You have no reviews at the moment</li>
                    </ul>
                </div>
            )
        }
    }
}

export default YourReviews