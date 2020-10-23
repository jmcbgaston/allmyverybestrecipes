import React from 'react'
import { Link } from 'react-router-dom'

class RecipePostForm extends React.Component {
    constructor(props) {
        // debugger
        
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

    handleFile(e) {
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
        this.setState({ photoUrl: reader.result, photoFile: file });

        if (file) {
        reader.readAsDataURL(file);
        } else {
        this.setState({ photoUrl: "", photoFile: null });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        
        // for photo
        const formData = new FormData();
        
        formData.append('recipe[title]', this.state.title);
        formData.append('recipe[description]', this.state.description);
        formData.append('recipe[directions]', this.state.directions);
        formData.append('recipe[prep_time]', this.state.prep_time);
        formData.append('recipe[cook_time]', this.state.cook_time);
        formData.append('recipe[number_of_servings]', this.state.number_of_servings);
        formData.append('recipe[authorId]', this.state.authorId);

        // debugger;

        if (this.state.photoFile) {
            formData.append('recipe[photo]', this.state.photoFile);
        }
        
        // debugger;

        // for url
        this.props.action(formData)
            .then(data => this.props.history.push(`/recipes/${data.recipe.id}`))
    }

    handleChange(type) {
        return(e) => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }

    render() {

        if (this.props.recipe === undefined) {
            return null
        }

        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;

        if ((this.props.formType === "Update Recipe") && (this.props.currUser === this.props.recipe.author_id)) {
            return(
                <div className="top-level-post-form">
                    {this.renderErrors()}
                    <form className="post-form"
                        onSubmit={this.handleSubmit}>

                        <ul className="post-form-main">
                            <label>Recipe title</label>
                                <input type="text" 
                                    value={this.state.title}
                                    onChange={this.handleChange("title")}/>
                            <label>Description</label>
                                <textarea type="text" 
                                    value={this.state.description}
                                    onChange={this.handleChange("description")}/>
                            <label>Directions</label>
                                <textarea type="text" 
                                    value={this.state.directions}
                                    onChange={this.handleChange("directions")}/>
                        </ul>

                        <ul className="post-form-bits">
                            <li>
                                <label>Prep time</label>
                                    <input type="number" 
                                        step="0.1"
                                        value={this.state.prep_time}
                                        onChange={this.handleChange("prep_time")}/>
                            </li>
                            <li>
                                <label>Cook time</label>
                                    <input type="number" 
                                        step="0.1"
                                        value={this.state.cook_time}
                                        onChange={this.handleChange("cook_time")}/>
                            </li>
                            <li>
                                <label>Number of servings</label>
                                    <input type="number" 
                                        step="0.1"
                                        value={this.state.number_of_servings}
                                        onChange={this.handleChange("number_of_servings")}/>
                            </li>
                        </ul>

                        <ul className="post-form-photo">
                            <label>Photo</label>
                                <input type="file"
                                    onChange={this.handleFile.bind(this)}/>
                                {preview}
                        </ul>

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
                <div className="top-level-post-form">
                    {this.renderErrors()}
                    <form className="post-form"
                        onSubmit={this.handleSubmit}>

                        <ul className="post-form-main">
                            <label>Recipe title</label>
                                <input type="text" 
                                    value={this.state.title}
                                    onChange={this.handleChange("title")}/>
                            <label>Description</label>
                                <textarea type="text" 
                                    value={this.state.description}
                                    onChange={this.handleChange("description")}/>
                            <label>Directions</label>
                                <textarea type="text" 
                                    value={this.state.directions}
                                    onChange={this.handleChange("directions")}/>
                        </ul>

                        <ul className="post-form-bits">
                            <li>
                                <label>Prep time</label>
                                    <input type="number" 
                                        step="0.1"
                                        value={this.state.prep_time}
                                        onChange={this.handleChange("prep_time")}/>
                            </li>
                            <li>
                                <label>Cook time</label>
                                    <input type="number" 
                                        step="0.1"
                                        value={this.state.cook_time}
                                        onChange={this.handleChange("cook_time")}/>
                            </li>
                            <li>
                                <label>Number of servings</label>
                                    <input type="number" 
                                        step="0.1"
                                        value={this.state.number_of_servings}
                                        onChange={this.handleChange("number_of_servings")}/>
                            </li>
                        </ul>

                        <ul className="post-form-photo">
                            <label>Photo</label>
                                <input type="file"
                                    onChange={this.handleFile.bind(this)}/>
                                {preview}
                        </ul>

                        <button type="submit">{this.props.formType}</button>
                    </form>
                </div>
            )
        } else {
            return(
                <div className="top-level-post-form">
                    {this.renderErrors()}
                    <form className="post-form"
                        onSubmit={this.handleSubmit}>

                        <ul className="post-form-main">
                            <label>Recipe title</label>
                                <input type="text" 
                                    value={this.state.title}
                                    onChange={this.handleChange("title")}/>
                            <label>Description</label>
                                <textarea type="text" 
                                    value={this.state.description}
                                    onChange={this.handleChange("description")}/>
                            <label>Directions</label>
                                <textarea type="text" 
                                    value={this.state.directions}
                                    onChange={this.handleChange("directions")}/>
                        </ul>
                     
                        <ul className="post-form-bits">
                            <li>
                                <label>Prep time</label>
                                    <input type="number" 
                                        step="0.1"
                                        value={this.state.prep_time}
                                        onChange={this.handleChange("prep_time")}/>
                            </li>
                            <li>
                                <label>Cook time</label>
                                    <input type="number" 
                                        step="0.1"
                                        value={this.state.cook_time}
                                        onChange={this.handleChange("cook_time")}/>
                            </li>
                            <li>
                                <label>Number of servings</label>
                                    <input type="number" 
                                        step="0.1"
                                        value={this.state.number_of_servings}
                                        onChange={this.handleChange("number_of_servings")}/>
                            </li>
                        </ul>

                        <ul className="post-form-photo">
                            <label>Photo</label>
                                <input type="file"
                                    onChange={this.handleFile.bind(this)}/>
                                {preview}
                        </ul>

                    </form>
                </div>
            )
        }

    }
}

export default RecipePostForm