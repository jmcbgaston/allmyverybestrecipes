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
            return (
                <RecipeIndexItem
                    recipe={recipe}
                    key={idx}
                    // deletePost={this.props.deletePost}
                />
            )
        })
        return(
            <div>
                <ul>
                    <Link to="/recipes/new">Create a recipe</Link>
                    {recipes}
                </ul>

                {/* another component after the previous component */}
                {/* <Switch>
                    <Route exact path="/your-profile/recipes/new" component={CreateRecipeFormContainer} />
                </Switch> */}
            </div>
        )
    }
}

export default YourRecipes