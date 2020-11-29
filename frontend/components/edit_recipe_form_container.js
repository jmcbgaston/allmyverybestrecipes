import React from 'react';
import { connect } from 'react-redux';
import RecipePostForm from './recipe_post_form';
import { fetchRecipe, updateRecipe, deleteRecipe } from '../actions/recipe_actions';

class EditRecipePostForm extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchRecipe(this.props.match.params.recipeId)
    }

    render() {
        const { action, formType, recipe, deleteRecipe, history, currUser, errors } = this.props;
    
        if (!recipe) return null;
        return (
            <RecipePostForm
                action={action}
                formType={formType}
                recipe={recipe} 
                deleteRecipe={deleteRecipe}
                history={history}
                currUser={currUser}
                errors={errors}
            />
        );
    }
}

const mSTP = (state, ownProps) => {
    return {
        recipe: state.entities.recipes[ownProps.match.params.recipeId], 
        formType: "Update Recipe", 
        currUser: state.session.currentUser, 
        errors: state.errors.recipeErrors
    }
}

const mDTP = dispatch => {
    return {
        fetchRecipe: recipeId => dispatch(fetchRecipe(recipeId)), 
        deleteRecipe: recipeId => dispatch(deleteRecipe(recipeId)), 
        action: recipe => dispatch(updateRecipe(recipe))
    }
}

export default connect(mSTP, mDTP)(EditRecipePostForm)

