import { connect } from 'react-redux';
import RecipeIndex from './recipe_index';
import { fetchRecipes, deleteRecipe } from '../actions/recipe_actions';

const mSTP = state => {
    return {
        recipes: Object.values(state.entities.recipes)
    }
}

const mDTP = dispatch => {
    return {
        fetchRecipes: recipes => dispatch(fetchRecipes(recipes)), 
        deleteRecipe: recipeId => dispatch(deleteRecipe(recipeId))
    }
}

export default connect(mSTP, mDTP)(RecipeIndex)