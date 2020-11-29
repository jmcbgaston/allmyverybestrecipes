
import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import recipesReducer from './recipes_reducer';
import reviewsReducer from './reviews_reducer';
// import ingredientsReducer from './ingredients_reducer';


const entitiesReducer = combineReducers({
    users: usersReducer, 
    recipes: recipesReducer, 
    reviews: reviewsReducer,
    // ingredients: ingredientsReducer
})

export default entitiesReducer;