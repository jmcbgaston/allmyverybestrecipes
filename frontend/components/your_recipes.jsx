import React from 'react'
import { Switch, Link, Route } from 'react-router-dom' 
// import CreateRecipeFormContainer from './create_recipe_form_container' 

class YourRecipes extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return(
            <div>
                <ul>
                    <Link to="/recipes/new">Create a recipe</Link>
                    {/* <Link to="/your-profile/recipes/new">Create a recipe</Link> */}

                    {/* <Link to="/recipes/:recipeId">Recipe Show</Link> */}
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