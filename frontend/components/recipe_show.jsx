import React from 'react'
import { Link } from 'react-router-dom' 

class RecipeShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchRecipe(this.props.match.params.recipeId)
    }
    
    render() {
        if (this.props.recipe === undefined) {
            return null
        }

        if (this.props.currUser === this.props.recipe.author_id) {
            return(
                <div>
                   <ul>
                       <li>{this.props.recipe.photo}</li>
                       <li>{this.props.recipe.title}</li>
                       <li>{this.props.recipe.description}</li>
                       <li>{this.props.recipe.directions}</li>
                       <li>{this.props.recipe.prep_time}</li>
                       <li>{this.props.recipe.cook_time}</li>
                       <li>{this.props.recipe.number_of_servings}</li>
                       <button><Link to={`/recipes/${this.props.recipe.id}/edit`}>Edit</Link></button>
                       <button>
                           <Link to="/your-profile/recipes">Back to profile</Link>
                        </button>
                   </ul>
                </div>
            )
        } else {
            return (
                <div>
                    <ul>
                        <li>{this.props.recipe.title}</li>
                        <li>{this.props.recipe.description}</li>
                        <li>{this.props.recipe.directions}</li>
                        <li>{this.props.recipe.prep_time}</li>
                        <li>{this.props.recipe.cook_time}</li>
                        <li>{this.props.recipe.number_of_servings}</li>
                        <button>
                            <Link to="/">Back to home</Link>
                        </button>
                    </ul>
                </div>
            )
        }

    }
}

export default RecipeShow