import React from 'react'
import { Link } from 'react-router-dom' 

class RecipeShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchRecipe(this.props.recipe.id)
    }
    
    render() {
        // debugger;
        return(
            <div>
               <ul>
                    {/* <li>{this.props.recipe.authorId}</li> */}
                    <li>{this.props.recipe.title}</li>
                    <li>{this.props.recipe.description}</li>
                    <li>{this.props.recipe.directions}</li>
                    <li>{this.props.recipe.prep_time}</li>
                    <li>{this.props.recipe.cook_time}</li>
                    <li>{this.props.recipe.number_of_servings}</li>
               </ul>
            </div>
        )
    }
}

export default RecipeShow