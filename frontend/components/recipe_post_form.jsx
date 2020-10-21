import React from 'react'

class RecipePostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.recipe
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)

    }
    
    handleChange(type) {
        return(e) => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }

    render() {
        return(
            <div>
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
    }
}

export default RecipePostForm