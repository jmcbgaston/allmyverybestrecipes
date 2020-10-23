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
                <div className="show-top-level">
                       <img src={this.props.recipe.photoUrl}/>
                   <ul>
                       <li className="title">{this.props.recipe.title}</li>
                       <li>{this.props.recipe.description}</li>
                       <li>{this.props.recipe.directions}</li>
                       <li className="num-val">Prep time: {this.props.recipe.prep_time} mins</li>
                       <li className="num-val">Cook time: {this.props.recipe.cook_time} mins</li>
                       <li className="num-val">Number of servings: {this.props.recipe.number_of_servings}</li>
                       <button><Link to={`/recipes/${this.props.recipe.id}/edit`}>Edit</Link></button>
                       <button>
                           <Link to="/your-profile/recipes">Back to profile</Link>
                        </button>
                   </ul>
                </div>
            )
        } else {
            return (
                <div className="show-top-level">
                        <img src={this.props.recipe.photoUrl}/>
                    <ul>
                        <li className="title">{this.props.recipe.title}</li>
                        <li>{this.props.recipe.description}</li>
                        <li>{this.props.recipe.directions}</li>
                        <li className="num-val">Prep time: {this.props.recipe.prep_time} mins</li>
                       <li className="num-val">Cook time: {this.props.recipe.cook_time} mins</li>
                       <li className="num-val">Number of servings: {this.props.recipe.number_of_servings}</li>
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