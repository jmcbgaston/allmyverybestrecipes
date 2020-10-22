import { connect } from 'react-redux'
import RecipePostForm from './recipe_post_form'
import { createRecipe, deleteRecipe } from '../actions/recipe_actions'

const mSTP = state => {
    let authorId = state.session.currentUser
    return {
        recipe: {
            title: "",
            description: "",
            directions: "",
            prep_time: "",
            cook_time: "",
            number_of_servings: "", 
            authorId: authorId
        }, 
        formType: "Create Recipe", 
        errors: state.errors.recipeErrors
    }
}

const mDTP = dispatch => {
    return {
        action: recipe => dispatch(createRecipe(recipe)), 
        deleteRecipe: recipeId => dispatch(deleteRecipe(recipeId))
    }
}

export default connect(mSTP, mDTP)(RecipePostForm)