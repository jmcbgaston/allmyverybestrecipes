import React from 'react'
import { Link } from 'react-router-dom'

class RecipePostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.recipe
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    renderErrors() {
        return (
            <ul className="form-errors">
                {this.props.errors.map((error, idx) => {
                    return <li key={idx}>{error}</li>
                })}
            </ul>
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
            .then(data => this.props.history.push(`/recipes/${data.recipe.id}`))
    }
    
    handleChange(type) {
        return(e) => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }

    render() {
        // debugger

        if (this.props.recipe === undefined) {
            return null
        }

        if ((this.props.formType === "Update Recipe") && (this.props.currUser === this.props.recipe.author_id)) {
            return(
                <div>
                    {this.renderErrors()}
                    <form onSubmit={this.handleSubmit}>
                        <label>Recipe title
                            <input type="text" 
                                value={this.state.title}
                                onChange={this.handleChange("title")}/>
                        </label>
                        <label>Description
                            <input type="text" 
                                value={this.state.description}
                                onChange={this.handleChange("description")}/>
                        </label>
                        <label>Directions
                            <input type="text" 
                                value={this.state.directions}
                                onChange={this.handleChange("directions")}/>
                        </label>
                        <label>Prep time
                            <input type="number" 
                                value={this.state.prep_time}
                                onChange={this.handleChange("prep_time")}/>
                        </label>
                        <label>Cook time
                            <input type="number" 
                                value={this.state.cook_time}
                                onChange={this.handleChange("cook_time")}/>
                        </label>
                        <label>Number of servings
                            <input type="number" 
                                value={this.state.number_of_servings}
                                onChange={this.handleChange("number_of_servings")}/>
                        </label>
                        <button type="submit">{this.props.formType}</button>
                        <button type="submit" 
                            onClick={() => dispatch(this.props.deleteRecipe(this.state.id))}>
                            <Link to={`/your-profile/recipes`}>Delete Recipe</Link>
                        </button>
                    </form>
                </div>
            )
        } else if (this.props.formType === "Create Recipe") {
            return(
                <div>
                    {this.renderErrors()}
                    <form onSubmit={this.handleSubmit}>
                        <label>Recipe title
                            <input type="text" 
                                value={this.state.title}
                                onChange={this.handleChange("title")}/>
                        </label>
                        <label>Description
                            <input type="text" 
                                value={this.state.description}
                                onChange={this.handleChange("description")}/>
                        </label>
                        <label>Directions
                            <input type="text" 
                                value={this.state.directions}
                                onChange={this.handleChange("directions")}/>
                        </label>
                        <label>Prep time
                            <input type="number" 
                                value={this.state.prep_time}
                                onChange={this.handleChange("prep_time")}/>
                        </label>
                        <label>Cook time
                            <input type="number" 
                                value={this.state.cook_time}
                                onChange={this.handleChange("cook_time")}/>
                        </label>
                        <label>Number of servings
                            <input type="number" 
                                value={this.state.number_of_servings}
                                onChange={this.handleChange("number_of_servings")}/>
                        </label>
                        <button type="submit">{this.props.formType}</button>
                    </form>
                </div>
            )
        } else {
            return(
                <div>
                    {this.renderErrors()}
                    <form onSubmit={this.handleSubmit}>
                        <label>Recipe title
                            <input type="text" 
                                value={this.state.title}
                                onChange={this.handleChange("title")}/>
                        </label>
                        <label>Description
                            <input type="text" 
                                value={this.state.description}
                                onChange={this.handleChange("description")}/>
                        </label>
                        <label>Directions
                            <input type="text" 
                                value={this.state.directions}
                                onChange={this.handleChange("directions")}/>
                        </label>
                        <label>Prep time
                            <input type="number" 
                                value={this.state.prep_time}
                                onChange={this.handleChange("prep_time")}/>
                        </label>
                        <label>Cook time
                            <input type="number" 
                                value={this.state.cook_time}
                                onChange={this.handleChange("cook_time")}/>
                        </label>
                        <label>Number of servings
                            <input type="number" 
                                value={this.state.number_of_servings}
                                onChange={this.handleChange("number_of_servings")}/>
                        </label>
                    </form>
                </div>
            )
        }

    }
}

export default RecipePostForm