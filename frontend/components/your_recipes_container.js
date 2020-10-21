import { connect } from 'react-redux'
import YourRecipes from './your_recipes'
import { fetchRecipes } from '../actions/recipe_actions'

const mSTP = state => {
    return {
        recipes: Object.values(state.entities.recipes)
    }
}

const mDTP = dispatch => {
    return {
        fetchRecipes: recipes => dispatch(fetchRecipes(recipes))
    }
}

export default connect(mSTP, mDTP)(YourRecipes)