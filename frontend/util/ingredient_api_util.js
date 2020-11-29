// export const fetchIngredients = ingredients => {
//     return (
//         $.ajax({
//             method: "POST", 
//             url: `/api/ingredients/`, 
//             data: ingredient
//         })
//     )
// }

export const createIngredient = ingredient => {
    return (
        $.ajax({
            method: "POST", 
            url: `/api/ingredients/`, 
            data: ingredient
        })
    )
}

export const deleteIngredient = (ingredientId) => {
    return (
        $.ajax({
            method: "DELETE", 
            url: `/api/ingredients/${ingredientId}`
        })
    )
}