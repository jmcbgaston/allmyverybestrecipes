import { RECEIVE_INGREDIENT, REMOVE_INGREDIENT } from '../actions/ingredient_actions'

const recipesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState)
 
    switch (action.type) {
        // case RECEIVE_ALL_RECIPES:
        //     return action.recipes
        case RECEIVE_INGREDIENT:
            newState[action.ingredient.id] = action.ingredient
            return newState
        case REMOVE_INGREDIENT:
            delete newState[action.ingredientId]
            return newState
        default:
            return oldState;
    }
}

export default recipesReducer;