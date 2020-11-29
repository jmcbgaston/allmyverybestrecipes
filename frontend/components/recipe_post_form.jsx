import React from 'react'
import { Link } from 'react-router-dom'

class RecipePostForm extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     recipe: this.props.recipe, 
        //     ingredients: this.props.ingredients,
        //     newIngredient: this.props.newIngredient
        //     // newIngredient: this.props.newIngredient
        // },
        this.state = this.props.recipe
        // this.ingredients = new Array([], [], [])

        this.handleSubmit = this.handleSubmit.bind(this)
        // this.handleIngredients = this.handleIngredients.bind(this)
        // this.handleIngredientForm = this.handleIngredientForm.bind(this)
        // this.handleIngredientCreation = this.handleIngredientCreation.bind(this)
        // this.handleIngredientsList = this.handleIngredientsList.bind(this)
        // this.handleIngredientChange = this.handleIngredientChange.bind(this)
        
        // this.handleNewItem = this.handleNewItem.bind(this)
        // this.handleMap = this.handleMap.bind(this)
        // this.handleAmount = this.handleAmount.bind(this)

        // this.amt = ""
        // this.name = ""
        // this.qty = ""
    }

    // componentDidUpdate() {

    //     // this.handleMap(0)
    //     // this.handleMap(1)
    //     // this.handleMap(2)
    // }

    // handleNewItem() {

    //     this.ingredients[0].push(this.state.amt)
    //     this.ingredients[1].push(this.state.quantity_type)
    //     this.ingredients[2].push(this.state.name)


    //     this.componentDidUpdate();

    //     // this.handleMap(0)
    //     // this.handleMap(1)
    //     // this.handleMap(2)
    // }

    // handleMap(idx) {

    //     this.ingredients[idx].map((ele, idx) => {
            
    //         let htmlEle = document.getElementsByClassName('ingredient-list-amount')

    //         document.createElement()
    //         // htmlEle.append(<li key={idx}>{ele}</li>)

    //         // document.getElementsByClassName('ingredient-list-qty')
    //         // document.getElementsByClassName('ingredient-list-name')
            
    //         // return(
    //         //     <li key={idx}>
    //         //         {ele}
    //         //     </li>
    //         // )
    //     })

    // }

    // handleAmount(e) {
    //     this.amt = this.amt.concat(e.currentTarget.value)
    //     return this.amt
    //     // this.ingredients[0].push(e.currentTarget.value) 
    // }

    // handleListAmount() {
    //     return 
    // }
    
    // handleQty(e) {
    //     // this.ingredients[1].push(e.currentTarget.value) 
    // }
    
    // handleNmae(e) {
    //     // this.ingredients[2].push(e.currentTarget.value) 
    // }

    // handleIngredients() {
    //     return(
    //         this.handleIngredientsList()
    //         // this.handleIngredientForm()
    //     )
    // }

    // handleIngredientsList() {
    //     if (this.props.ingredients.length > 0) {

    //         this.props.ingredients.map((ingredient, idx) => {
    //             return(
    //                 <ul key={idx}>
    //                     <li>{ingredient.amt}</li>
    //                     <li>{ingredient.name}</li>
    //                     <li>{ingredient.quantity_type}</li>
    //                 </ul>
    //             )
    //         })
    //     }
    // }

    // handleIngredientForm() {
    //     return(
    //         <ul>
    //             <label>Amt:
    //                 <input 
    //                     type="text"
    //                     step="0.1"
    //                     onChange={this.handleIngredientChange("amt")}
    //                     value={this.state.newIngredient.amt}/>
    //             </label>

    //             <label>Ingredient Name:
    //                 <input 
    //                     type="text"
    //                     onChange={this.handleIngredientChange("name")}
    //                     value={this.state.newIngredient.name}/>
    //             </label>

    //             <label>Quantity Type / Size:
    //                 <input 
    //                     type="text"
    //                     onChange={this.handleIngredientChange("quantity_type")}
    //                     value={this.state.newIngredient.quantity_type}/>
    //             </label>
    //             <button 
    //                 // type="submit" 
    //                 onClick={this.handleIngredientCreation}>
    //                 +
    //             </button>
    //         </ul>
    //     )
    // }

    // handleIngredientChange(type) {
        
    //     return(e) => {

    //         if (type === 'amt') {
    //             this.props.newIngredient.amt = e.currentTarget.value
    //         } else if (type === 'name') {
    //             this.props.newIngredient.name = e.currentTarget.value
    //         } else {
    //             this.props.newIngredient.quantity_type = e.currentTarget.value
    //         }

    //         let updatedIngredient = this.props.newIngredient

    //         this.setState({ newIngredient: updatedIngredient })
    //     }
    // }

    // handleIngredientCreation() {
        
    //     let name = this.state.newIngredient.name
    //     let qty = this.state.newIngredient.quantity_type
        
    //     const ingredient = {name: name, quantity_type: qty }

    //     this.props.createIngredient(ingredient)
    //     .then(response => {
    //         console.log(response)
    //         // if (!this.state.ingredients.includes(ingredient)) {
    //         //     this.state.ingredients.push(ingredient)
    //         // }
    //     })
    //     // .catch(err => {
    //     //     console.log(err)
    //     // })

    // }

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
        
        // let ingArr = [ this.state.ingredients ]

        const formData = new FormData();

        if (this.props.formType === "Update Recipe") {
            formData.append('recipe[id]', this.state.id);
        }

        // let ingArr = this.state.ingredients.split(' , ')

        formData.append('recipe[title]', this.state.title);
        formData.append('recipe[description]', this.state.description);
        formData.append('recipe[directions]', this.state.directions);
        formData.append('recipe[prep_time]', this.state.prep_time);
        formData.append('recipe[cook_time]', this.state.cook_time);
        formData.append('recipe[number_of_servings]', this.state.number_of_servings);
        formData.append('recipe[authorId]', this.state.authorId);
        // formData.append('recipe[ingredients]', this.state.ingredients.split(' , '));
        formData.append('recipe[ingredients]', this.state.ingredients);
        // formData.append('recipe[ingredients]', ingArr);

        if (this.state.photoFile) {
            formData.append('recipe[photo]', this.state.photoFile);
        }

        this.props.action(formData)
            .then(data => {
                return(
                    this.props.history.push(`/recipes/${data.recipe.id}`)
                )
            })
    }

    handleChange(type) {
        return(e) => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }

    render() {

        // let ingredientsAmtList = []

        // if (this.ingredients[0].length > 0) {

        //     ingredientsAmtList = this.ingredients[0].map((ele, idx) => {
        //         return(
        //             <li key={idx}>{ele}</li>
        //         )
        //     })
        // }

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
                                        placeholder="mins"
                                        value={this.state.prep_time}
                                        onChange={this.handleChange("prep_time")}/>
                            </li>
                            <li>
                                <label>Cook time</label>
                                    <input type="number" 
                                        step="0.1"
                                        placeholder="mins"
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
                            <label>Recipe title:</label>
                                <input type="text" 
                                    value={this.state.title}
                                    onChange={this.handleChange("title")}/>
                            <label>Description:</label>
                                <textarea type="text" 
                                    value={this.state.description}
                                    onChange={this.handleChange("description")}/>
                            <label>Directions:
                                <br/>
                                Please follow format:
                                <br/>
                                Step 1 ,
                                <br/>
                                Step 2 ,
                                <br/>
                                Step 3 ,
                                <br/>
                                etc ...
                                <br/>
                                Example: Crack eggs , Mix , Cook on medium heat , ...
                            </label>
                                <textarea type="text" 
                                    value={this.state.directions}
                                    onChange={this.handleChange("directions")}/>
                            <label>
                                Ingredients: 
                                <br/>
                                Please follow format:
                                <br/>
                                Amount Measurement Name ,
                                <br/>
                                Amount Measurement Name ,
                                <br/>
                                Amount Measurement Name ,
                                <br/>
                                etc ...
                                <br/>
                                Example: 3 large eggs , 1 cup flour , 1/2 tsp sugar
                            </label>
                                <textarea type="text" 
                                    value={this.state.ingredients}
                                    onChange={this.handleChange("ingredients")}/>
                        </ul>

                        {/* <section> <label>Ingredients</label>
                            <ul>amount: 
                                <ul className="ingredient-list-amount">
                                    {ingredientsAmtList}
                                </ul>
                                <input type="text" value={this.state.amt} onChange={this.handleChange('amt')}/>
                            </ul>
                            <ul>qty type:
                                <ul className="ingredient-list-qty">
                                </ul>
                                <input type="text" value={this.state.quantity_type} onChange={this.handleChange('quantity_type')}/>
                            </ul>
                            <ul>ingredient name:
                                <ul className="ingredient-list-name">
                                </ul>
                                <input type="text" value={this.state.name} onChange={this.handleChange('name')}/>
                            </ul>
                            <button type="button" onClick={() => this.handleNewItem()}>+</button>
                        </section> */}

                        <ul className="post-form-bits">
                            <li>
                                <label>Prep time</label>
                                    <input type="number" 
                                        step="0.1"
                                        placeholder="mins"
                                        value={this.state.prep_time}
                                        onChange={this.handleChange("prep_time")}/>
                            </li>
                            <li>
                                <label>Cook time</label>
                                    <input type="number" 
                                        step="0.1"
                                        placeholder="mins"
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

                    {/* <form onSubmit={this.handleIngredientCreation}>
                        <label>Ingredients</label>

                        <ul>
                            <label>Amt:
                                <input 
                                    type="text"
                                    step="0.1"
                                    onChange={this.handleIngredientChange("amt")}
                                    value={this.state.newIngredient.amt}/>
                            </label>

                            <label>Quantity Type / Size:
                                <input 
                                    type="text"
                                    onChange={this.handleIngredientChange("quantity_type")}
                                    value={this.state.newIngredient.quantity_type}/>
                            </label>

                            <label>Ingredient Name:
                                <input 
                                    type="text"
                                    onChange={this.handleIngredientChange("name")}
                                    value={this.state.newIngredient.name}/>
                            </label>
                        </ul>

                    <button type="submit">+</button>
                    </form> */}

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
                                        placeholder="mins"
                                        value={this.state.prep_time}
                                        onChange={this.handleChange("prep_time")}/>
                            </li>
                            <li>
                                <label>Cook time</label>
                                    <input type="number" 
                                        step="0.1"
                                        placeholder="mins"
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