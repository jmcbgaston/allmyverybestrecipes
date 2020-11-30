import React from 'react'
import { Link } from 'react-router-dom'

class YourReviews extends React.Component {
    constructor(props) {
        super(props)
        this.removeReview = this.removeReview.bind(this)
    }

    componentDidMount() {
        debugger

        this.props.fetchReviews();
    }
    
    componentDidUpdate() {
        this.props.fetchReviews();
    }

    removeReview(e) {
        e.preventDefault()

        // let tempList = this.props.shoppingList
        // let cloneList = { ...tempList }
        // debugger

        

        // let newList = cloneList.items.filter(item => item !== e.currentTarget.closest('li').innerText.slice(1))

        // cloneList.items = newList
        let reviewId = parseInt(e.currentTarget.closest('li').id)

        // debugger

        this.props.deleteReview(reviewId)
    }
    
    render() {
        let reviews = this.props.reviews.map((review, idx) => {
            return(
                <li id={review.id} key={idx}>
                    <button onClick={this.removeReview}>-</button>
                    {review.rating}
                    {review.body}
                    <Link to={`/recipes/${review.recipe_id}`}>Go to recipe</Link>
                </li>
            )
        })

        debugger
        
        if (reviews.length > 0) {
            debugger
            return(
                <div>
                    <ul>
                        {reviews}
                    </ul>
                </div>
            )
        } else {
            debugger
            return(
                <div>
                    <ul>
                        <li>You have no reviews at the moment</li>
                    </ul>
                </div>
            )
        }
    }
}

export default YourReviews