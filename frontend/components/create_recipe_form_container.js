import { connect } from 'react-redux'
import RecipePostForm from './recipe_post_form'
import { createRecipe, deleteRecipe } from '../actions/recipe_actions'
// import { createIngredient } from '../actions/ingredient_actions'
// import { createIngredient } from '../util/ingredient_api_util'

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
            authorId: authorId, 
            photoFile: null,
            photoUrl: null, 
            ingredients: ""
        }, 
        // newIngredient: {
        // },
        formType: "Create Recipe", 
        errors: state.errors.recipeErrors
    }
}

const mDTP = dispatch => {
    return {
        action: recipe => dispatch(createRecipe(recipe)), 
        deleteRecipe: recipeId => dispatch(deleteRecipe(recipeId)), 
        // createIngredient: ingredient => dispatch(createIngredient(ingredient))
    }
}

export default connect(mSTP, mDTP)(RecipePostForm)