
import { RECEIVE_RECIPE_ERRORS, RECEIVE_CURRENT_USER, REMOVE_RECIPE_ERRORS } from '../actions/recipe_actions'

// const _nullRecipe = { recipeErrors: null }

// const recipeErrorsReducer = (oldState = _nullRecipe, action) => {
const recipeErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_RECIPE_ERRORS: 
            return action.errors
        // case RECEIVE_CURRENT_USER:
        //     return []
        case REMOVE_RECIPE_ERRORS:
            return []
        default:
            return []
    }
}

export default recipeErrorsReducer;