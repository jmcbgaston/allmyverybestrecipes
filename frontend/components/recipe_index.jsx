import React from 'react';
import RecipeIndexItem from './recipe_index_item';

class RecipeIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchRecipes();
    }

    render() {
        let recipes = this.props.recipes.map((recipe, idx) => {
            return (
                <RecipeIndexItem
                    recipe={recipe}
                    key={idx}
                    // deletePost={this.props.deletePost}
                />
            )
        })

        return (
            <div>
                <ul>
                    {recipes}
                </ul>
            </div>
        )
    }
}

export default RecipeIndex