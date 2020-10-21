
import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";
import recipeErrorsReducer from './recipe_errors_reducer'

const errorsReducer = combineReducers({
    sessionErrors: sessionErrorsReducer, 
    recipeErrors: recipeErrorsReducer
});

export default errorsReducer;