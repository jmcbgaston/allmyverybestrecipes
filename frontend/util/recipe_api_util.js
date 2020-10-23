export const fetchRecipes = () => {
    return (
        $.ajax({
            method: "GET", 
            url: `/api/recipes`
        })
    )
}

export const fetchRecipe = (recipeId) => {
    return (
        $.ajax({
            method: "GET", 
            url: `/api/recipes/${recipeId}`
        })
    )
}

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
 
export const updateRecipe = (recipe) => {
    return (
        $.ajax({
            method: "PATCH", 
            url: `/api/recipes/${recipe.get("recipe[id]")}`, 
            data: recipe,
            contentType: false,
            processData: false
        })
    )
}

export const deleteRecipe = (recipeId) => {
    return (
        $.ajax({
            method: "DELETE", 
            url: `/api/recipes/${recipeId}`
        })
    )
}