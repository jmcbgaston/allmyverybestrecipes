import { connect } from 'react-redux'
import RecipePostForm from './recipe_post_form'
import { createRecipe } from '../actions/recipe_actions'

const mSTP = state => {
    let authorId = state.session.currentUser
    return {
        recipe: {
            title: "",
            description: "",
            directions: "",
            prep_time: 0,
            cook_time: 0,
            number_of_servings: 0, 
            authorId: authorId
        }, 
        formType: "Create Recipe"
    }
}

const mDTP = dispatch => {
    return {
        action: recipe => dispatch(createRecipe(recipe))
    }
}

export default connect(mSTP, mDTP)(RecipePostForm)