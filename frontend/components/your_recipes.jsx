import React from 'react'
import { Switch, Link, Route } from 'react-router-dom' 
import RecipeIndexItem from './recipe_index_item';

class YourRecipes extends React.Component {
    constructor(props) {
        // debugger;
        super(props)
    }

    componentDidMount() {
        this.props.fetchRecipes()
    }
    
    render() {

        // debugger

        let recipes = this.props.recipes.map((recipe, idx) => {

            // debugger
            if (this.props.currUser === recipe.author_id) {
                return (
                    <RecipeIndexItem
                        recipe={recipe}
                        key={idx}
                    />
                )
            }
        })
        return(
            <div>
                <ul>
                    <Link to="/recipes/new">Create a recipe</Link>
                    {recipes}
                </ul>
            </div>
        )
    }
}

export default YourRecipes