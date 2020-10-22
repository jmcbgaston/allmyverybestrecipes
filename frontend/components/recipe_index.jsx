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
                <li className="r-index-li-home" key={idx}>
                    <RecipeIndexItem
                        recipe={recipe}
                    />
                </li>
            )
        })

        return (
            <div className="recipe-index-top-level">
                <ul className="recipe-index-list">
                    {recipes}
                </ul>
            </div>
        )
    }
}

export default RecipeIndex