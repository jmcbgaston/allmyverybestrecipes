import React from 'react'
import { Link } from 'react-router-dom'  

class YourRecipes extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return(
            <div>
                <ul>
                    <Link to="/recipes/new">Create a recipe</Link>
                    {/* <Link to="/recipes/:recipeId">Recipe Show</Link> */}
                </ul>
            </div>
        )
    }
}

export default YourRecipes