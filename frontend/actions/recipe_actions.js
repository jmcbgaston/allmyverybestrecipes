import * as RecipeAPIUtil from '../util/recipe_api_util'

export const RECEIVE_ALL_RECIPES = "RECEIVE_ALL_RECIPES"
export const RECEIVE_RECIPE = "RECEIVE_RECIPE"
export const REMOVE_RECIPE = "REMOVE_RECIPE"
export const RECEIVE_RECIPE_ERRORS = "RECEIVE_RECIPE_ERRORS"

// actions

const receiveAllRecipes = recipes => {
    return {
        type: RECEIVE_ALL_RECIPES, 
        recipes
    }
}

const receiveRecipe = recipe => {
    return {
        type: RECEIVE_RECIPE, 
        recipe
    }
}

const removeRecipe = recipeId => {
    return {
        type: REMOVE_RECIPE, 
        recipeId
    }
}

const receiveRecipeErrors = errors => {
    return {
        type: RECEIVE_RECIPE_ERRORS, 
        errors
    }
}

// thunk actions

    // fetch all recipes
export const fetchRecipes = () => {
    return (dispatch => {
        return RecipeAPIUtil.fetchRecipes()
            .then(recipes => {
                return dispatch(receiveAllRecipes(recipes))
            }, error => {
                return dispatch(receiveRecipeErrors(error.responseJSON))
            })
    })
}

    // fetch recipe
export const fetchRecipe = (recipeId) => {
    return (dispatch => {
        return RecipeAPIUtil.fetchRecipe(recipeId)
            .then(recipe => {
                return dispatch(receiveRecipe(recipe))
            }, error => {
                return dispatch(receiveRecipeErrors(error.responseJSON))
            })
    })
}

    // create recipe
export const createRecipe = (recipe) => {
    return (dispatch => {
        return RecipeAPIUtil.createRecipe(recipe)
            .then(newRecipe => {
                return dispatch(receiveRecipe(newRecipe))
            }, error => {
                return dispatch(receiveRecipeErrors(error.responseJSON))
            })
    })
}

    // update recipe
export const updateRecipe = (recipe) => {
    return (dispatch => {
        return RecipeAPIUtil.updateRecipe(recipe)
            .then(updatedRecipe => {
                return dispatch(receiveRecipe(updatedRecipe))
            }, error => {
                return dispatch(receiveRecipeErrors(error.responseJSON))
            })
    })
}

    //delete recipe
export const deleteRecipe = (recipeId) => {
    return (dispatch => {
        return RecipeAPIUtil.deleteRecipe(recipeId)
            .then(() => {
                return dispatch(removeRecipe(recipeId))
            }, error => {
                return dispatch(receiveRecipeErrors(error.responseJSON))
            })
    })
}

