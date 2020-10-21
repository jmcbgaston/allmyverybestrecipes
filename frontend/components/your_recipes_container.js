import { connect } from 'react-redux'
import YourRecipes from './your_recipes'
import { fetchRecipes } from '../actions/recipe_actions'

const mSTP = state => {
    // debugger
    return {
        recipes: Object.values(state.entities.recipes), 
        currUser: state.session.currentUser
    }
}

const mDTP = dispatch => {
    return {
        fetchRecipes: recipes => dispatch(fetchRecipes(recipes))
    }
}

export default connect(mSTP, mDTP)(YourRecipes)