
import * as RecipeAPIUtil from '../util/recipe_api_util'

export const RECEIVE_ALL_RECIPES = "RECEIVE_ALL_RECIPES"
export const RECEIVE_RECIPE = "RECEIVE_RECIPE"
export const REMOVE_RECIPE = "REMOVE_RECIPE"

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