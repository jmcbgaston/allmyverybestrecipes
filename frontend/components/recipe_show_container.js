import { connect } from 'react-redux'
import RecipeShow from './recipe_show'
import { fetchRecipe } from '../actions/recipe_actions'
import { fetchReviews, createReview } from '../actions/review_actions'

const mSTP = (state, ownProps) => {

    let recipe = state.entities.recipes[ownProps.match.params.recipeId]
    
    let reviews = Object.values(state.entities.reviews)
    let filtered = []
     
    if (reviews.length > 0 && recipe) {
        reviews.forEach(review => {
            if (review.recipe_id === recipe.id) {
                filtered.push(review)
            }
        })
    }

    if (filtered.length > 0) {
        return {
            recipe: recipe, 
            reviews: filtered, 
            currUser: state.session.currentUser
        }
    } else {
        return {
            recipe: recipe, 
            currUser: state.session.currentUser
        }
    }
}

const mDTP = dispatch => {
    return {
        fetchRecipe: recipeId => dispatch(fetchRecipe(recipeId)), 
        createReview: review => dispatch(createReview(review)), 
        fetchReviews: () => dispatch(fetchReviews())
    }
}

export default connect(mSTP, mDTP)(RecipeShow)