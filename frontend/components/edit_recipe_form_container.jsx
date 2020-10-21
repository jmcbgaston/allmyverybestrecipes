import React from 'react';
import { connect } from 'react-redux';
import RecipePostForm from './recipe_post_form';
import { fetchRecipe, updateRecipe } from '../actions/recipe_actions';

class EditRecipePostForm extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        debugger;
        this.props.fetchRecipe(this.props.recipe.id)
    }

    render() {
        debugger;
        const { action, formType, recipe } = this.props;
    
        if (!recipe) return null;
        return (
          <RecipePostForm
            action={action}
            formType={formType}
            recipe={recipe} />
        );
    }
}

const mSTP = (state, ownProps) => {
    debugger;
    return {
        recipe: state.entities.recipes[ownProps.match.params.recipeId], 
        formType: "Update Post"
    }
}

const mDTP = dispatch => {
    return {
        fetchRecipe: recipeId => dispatch(fetchRecipe(recipeId)), 
        action: recipe => dispatch(updateRecipe(recipe))
    }
}

export default connect(mSTP, mDTP)(EditRecipePostForm)

