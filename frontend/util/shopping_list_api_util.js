export const fetchShoppingList = (listId) => {
    debugger
    
    return (
        $.ajax({
            method: "GET", 
            url: `/api/shopping_lists/${listId}`
        })
    )
}

export const updateShoppingList = (list) => {
    return (
        $.ajax({
            method: "PATCH", 
            url: `/api/shopping_lists/${list.id}`, 
            data: list
        })
    )
}