
// fetch all recipes
export const fetchRecipes = () => {
    return (
        $.ajax({
            method: "GET", 
            url: `/api/recipes`
        })
    )
}

// fetch a recipe 
export const fetchRecipe = (recipeId) => {
    return (
        $.ajax({
            method: "GET", 
            url: `/api/recipes/${recipeId}`
        })
    )
}

// create recipe
export const createRecipe = (formData) => {
    return (
        $.ajax({
            method: "POST", 
            url: `/api/recipes/`, 
            data: formData, 
            contentType: false,
            processData: false
        })
    )
}

// update recipe
export const updateRecipe = (recipe) => {
    return (
        $.ajax({
            method: "PATCH", 
            url: `/api/recipes/${recipe.id}`, 
            data: { recipe }
        })
    )
}

// delete recipe
export const deleteRecipe = (recipeId) => {
    return (
        $.ajax({
            method: "DELETE", 
            url: `/api/recipes/${recipeId}`
        })
    )
}