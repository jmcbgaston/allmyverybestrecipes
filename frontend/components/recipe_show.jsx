import React from 'react'
import { Link } from 'react-router-dom' 

class RecipeShow extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
    }

    componentDidMount() {
        this.props.fetchRecipe(this.props.match.params.recipeId)
        this.props.fetchReviews()
        if (this.props.currUser) {
            this.props.fetchShoppingList(this.props.currUser)
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currUser === null && this.props.currUser) {
            this.props.fetchShoppingList(this.props.currUser)
        }
    }

    handleToggle(e) {
        e.preventDefault()

        let ele = e.currentTarget
        let item = e.currentTarget.closest('li').innerText.slice(1)
        let tempList = this.props.shoppingList
        let cloneList = { ...tempList }

        if (ele.innerText === "+") {
            ele.innerText = "-"
            ele.id = "toggle-negative"
            let newList = cloneList.items.concat(item)
            cloneList.items = newList
            this.props.updateShoppingList(cloneList)
        } else {
            ele.innerText = "+"
            ele.id = "toggle-positive"
            let newList = cloneList.items.filter(item => item !== e.currentTarget.closest('li').innerText.slice(1))
            cloneList.items = newList
            this.props.updateShoppingList(cloneList)
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        if (!this.props.currUser) {
            alert("You must be logged in to leave a review")
            document.getElementsByClassName('show-review-body')[0].value = ""
            document.getElementsByClassName('show-review-rating')[0].selectedIndex = 0
            return
        }

        let vBody = document.getElementsByClassName('show-review-body')[0].value
        document.getElementsByClassName('show-review-body')[0].value = ""
        let vRating = document.getElementsByClassName('show-review-rating')[0].selectedIndex
        document.getElementsByClassName('show-review-rating')[0].selectedIndex = 0

        let reviewPojo = ({ body: vBody, rating: vRating, recipe_id: this.props.recipe.id, reviewer_id: this.props.currUser })

        this.props.createReview(reviewPojo)
    }
    
    render() {
        if (this.props.recipe === undefined) {
            return null
        }

        let directions = this.props.recipe.directions.split(' , ').map((dir, idx) => {
            return(
                <li 
                    className="show-direction-item"
                    key={idx}>
                    {dir}
                </li>
            ) 
        })

        let ingredients = this.props.recipe.ingredients.split(' , ').map((ing, idx) => {
            if (this.props.currUser && this.props.shoppingList.items) {
                return(
                    <li 
                        className="toggle-list-item"
                        key={idx}>
                        <button 
                            id={this.props.shoppingList.items.includes(ing) ? "toggle-negative" : "toggle-positive"}
                            onClick={this.handleToggle}>
                            {this.props.shoppingList.items.includes(ing) ? "-" : "+"}
                        </button>
                        {ing}
                    </li>
                ) 
            } else {
                return(
                    <li 
                        className="toggle-list-item"
                        key={idx}>
                        {ing}
                    </li>
                ) 

            }
        })

        let reviews = []
            if (this.props.reviews && this.props.reviews.length > 0) {
                reviews = this.props.reviews.map((review, idx) => {
                    return(
                        <ul className="show-rating">
                            <label>{"★".repeat(review.rating)}</label>
                            <li key={idx}>{review.body}</li>
                        </ul>
                    ) 
                })
            } else {
                reviews = (
                    <ul>
                        <li>No reviews at the moment</li>
                    </ul>
                )
            }

        if (this.props.currUser && this.props.currUser === this.props.recipe.author_id) {
            return(
                <div className="show-top-level">
                    <ul className="show-top-level-left">
                        <img src={this.props.recipe.photoUrl}/>
                        <li className="num-val">Prep time: {this.props.recipe.prep_time} mins</li>
                        <li className="num-val">Cook time: {this.props.recipe.cook_time} mins</li>
                        <li className="num-val">Number of servings: {this.props.recipe.number_of_servings}</li>
                    </ul>

                    <ul className="show-top-level-middle">
                        <label className="title">{this.props.recipe.title}</label>
                        <ul className="show-description">Description:
                            <li>
                                {this.props.recipe.description}
                            </li>
                        </ul>
                        <ul className="show-directions">Directions: 
                            {directions}
                        </ul>
                        <ul className="show-ingredients">Ingredients: 
                            {ingredients}
                        </ul>

                        <button className="action-buttons">
                            <Link to={`/recipes/${this.props.recipe.id}/edit`}>Edit</Link>
                        </button>

                        <button className="action-buttons">
                            <Link to="/your-profile/recipes">Back to profile</Link>
                        </button>
                    </ul>

                    <form 
                        className="show-top-level-right">

                        <label>Reviews:</label>
                        {reviews}
                        <br/>
                    </form>

                </div>
            )
        } else if (this.props.currUser && this.props.currUser !== this.props.recipe.author_id) {
            return(
                <div className="show-top-level">
                    <ul className="show-top-level-left">
                        <img src={this.props.recipe.photoUrl}/>
                        <li className="num-val">Prep time: {this.props.recipe.prep_time} mins</li>
                        <li className="num-val">Cook time: {this.props.recipe.cook_time} mins</li>
                        <li className="num-val">Number of servings: {this.props.recipe.number_of_servings}</li>
                    </ul>

                    <ul className="show-top-level-middle">
                        <label className="title">{this.props.recipe.title}</label>
                        <ul className="show-description">Description:
                            <li>
                                {this.props.recipe.description}
                            </li>
                        </ul>
                        <ul className="show-directions">Directions: 
                            {directions}
                        </ul>
                        <ul className="show-ingredients">Ingredients: 
                            {ingredients}
                        </ul>

                        <button className="action-buttons">
                            <Link to="/">Back to home</Link>
                        </button>
                    </ul>

                    <form 
                        className="show-top-level-right"
                        onSubmit={this.handleSubmit}>

                        <label>Reviews:</label>
                        {reviews}
                        <br/>

                        <label>Leave a review:</label>
                        <br/>

                        <select className="show-review-rating">
                            <option value="0">---</option>
                            <option value="1">★</option>
                            <option value="2">★★</option>
                            <option value="3">★★★</option>
                            <option value="4">★★★★</option>
                            <option value="5">★★★★★</option>
                        </select>
                        <br/>

                        <textarea 
                            type="text" 
                            className="show-review-body" />
                        <br/>
                        
                        <button type="submit">Submit Review</button>
                    </form>

                </div>
            )
        } else {
            return (

                <div className="show-top-level">
                    <ul className="show-top-level-left">
                        <img src={this.props.recipe.photoUrl}/>
                        <li className="num-val">Prep time: {this.props.recipe.prep_time} mins</li>
                        <li className="num-val">Cook time: {this.props.recipe.cook_time} mins</li>
                        <li className="num-val">Number of servings: {this.props.recipe.number_of_servings}</li>
                    </ul>

                    <ul className="show-top-level-middle">
                        <label className="title">{this.props.recipe.title}</label>
                        <ul className="show-description">Description:
                            <li>
                                {this.props.recipe.description}
                            </li>
                        </ul>
                        <ul className="show-directions">Directions: 
                            {directions}
                        </ul>
                        <ul className="show-ingredients-sans-user">Ingredients: 
                            {ingredients}
                        </ul>

                        <button className="action-buttons">
                            <Link to="/">Back to home</Link>
                        </button>
                    </ul>

                    <form 
                        className="show-top-level-right">

                        <label>Reviews:</label>
                        {reviews}
                        <br/>
                    </form>
                </div>
            )
        }
    }
}

export default RecipeShow