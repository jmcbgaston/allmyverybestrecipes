// import * as IngredientAPIUtil from '../util/ingredient_api_util'

// // export const RECEIVE_ALL_RECIPES = "RECEIVE_ALL_RECIPES"
// export const RECEIVE_ALL_INGREDIENTS = "RECEIVE_ALL_INGREDIENTS"
// export const RECEIVE_INGREDIENT = "RECEIVE_INGREDIENT"
// export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT"

// const receiveAllIngredients = recipes => {
//     return {
//         type: RECEIVE_ALL_INGREDIENTS, 
//         recipes
//     }
// }

// // const receiveIngredient = ingredient => {
// //     return {
// //         type: RECEIVE_INGREDIENT, 
// //         ingredient
// //     }
// // }

// const removeIngredient = ingredientId => {
//     return {
//         type: REMOVE_INGREDIENT, 
//         ingredientId
//     }
// }

// export const fetchIngredients = () => {
//     return (dispatch => {
//         return RecipeAPIUtil.fetchIngredients()
//             .then(recipes => {
//                 return dispatch(receiveAllRecipes(recipes))
//             }, error => {
//                 return dispatch(receiveRecipeErrors(error.responseJSON))
//             })
//     })
// }

// export const createIngredient = (ingredient) => {
//     return (dispatch => {
//         return IngredientAPIUtil.createIngredient(ingredient)
//             .then(newingredient => {
//                 return dispatch(receiveAllIngredients(newingredient))
//             })
//     })
// }

// export const deleteIngredient = (ingredientId) => {
//     return (dispatch => {
//         return IngredientAPIUtil.deleteIngredient(ingredientId)
//             .then(() => {
//                 return dispatch(removeIngredient(ingredientId))
//             })
//     })
// }

