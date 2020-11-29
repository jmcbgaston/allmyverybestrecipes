import React from 'react'
import { Link } from 'react-router-dom'

class YourReviews extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        debugger

        this.props.fetchReviews();
    }
    
    render() {
        let reviews = this.props.reviews.map((review, idx) => {
            return(
                <li key={idx}>
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