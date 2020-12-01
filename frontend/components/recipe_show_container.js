import { connect } from 'react-redux'
import RecipeShow from './recipe_show'
import { fetchRecipe } from '../actions/recipe_actions'
import { fetchReviews, createReview } from '../actions/review_actions'
import { fetchShoppingList, updateShoppingList } from '../actions/shopping_list_actions'

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

    let sList = {}

    if (state.session.currentUser) {
        sList = state.entities.shoppingList
    } else {
        sList = {}
    }

    if (filtered.length > 0) {
        return {
            recipe: recipe, 
            reviews: filtered, 
            currUser: state.session.currentUser, 
            shoppingList: sList
        }
    } else {
        return {
            recipe: recipe, 
            currUser: state.session.currentUser, 
            shoppingList: sList
        }
    }
}

const mDTP = dispatch => {
    return {
        fetchRecipe: recipeId => dispatch(fetchRecipe(recipeId)), 
        createReview: review => dispatch(createReview(review)), 
        fetchReviews: () => dispatch(fetchReviews()), 
        fetchShoppingList: listId => dispatch(fetchShoppingList(listId)), 
        updateShoppingList: list => dispatch(updateShoppingList(list))
    }
}

export default connect(mSTP, mDTP)(RecipeShow)