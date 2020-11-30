import React from 'react'
import { Switch, Link, Route } from 'react-router-dom' 
import RecipeIndexItem from './recipe_index_item';

class YourRecipes extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchRecipes()
    }
    
    render() {
        let recipes = this.props.recipes.map((recipe, idx) => {
            if (this.props.currUser === recipe.author_id) {
                return (
                    <li key={idx}>
                        <RecipeIndexItem
                            recipe={recipe}
                            key={idx}
                        />
                    </li>
                )
            }
        })
        return(
            <div className="your-recipes-top-level">
                <ul className="yr-list">
                    <li>
                        <Link className="create-recipe" to="/recipes/new">
                            <span className="plus">+</span>
                            Add a Recipe
                        </Link>
                    </li>
                    {recipes}
                </ul>
            </div>
        )
    }
}

export default YourRecipes