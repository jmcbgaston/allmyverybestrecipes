import * as ListAPIUtil from '../util/shopping_list_api_util'

export const RECEIVE_LIST = "RECEIVE_LIST"
export const REMOVE_LIST = "REMOVE_LIST"
export const RECEIVE_LIST_ERRORS = "RECEIVE_LIST_ERRORS"
export const REMOVE_LIST_ERRORS = "REMOVE_LIST_ERRORS"

const receiveList = list => {
    debugger
    
    return {
        type: RECEIVE_LIST, 
        list
    }
}

const receiveListErrors = errors => {
    return {
        type: RECEIVE_LIST_ERRORS, 
        errors
    }
}


export const removeListErrors = () => {
    return {
        type: REMOVE_LIST_ERRORS
    }
}

export const fetchShoppingList = (listId) => {
    return (dispatch => {
        return ListAPIUtil.fetchShoppingList(listId)
            .then(list => {
                return dispatch(receiveList(list))
            }, error => {
                return dispatch(receiveListErrors(error.responseJSON))
            })
    })
}

export const updateShoppingList = (list) => {
    debugger
    
    return (dispatch => {
        return ListAPIUtil.updateShoppingList(list)
            .then(updatedList => {
                debugger
                
                return dispatch(receiveList(updatedList))
            }, error => {
                return dispatch(receiveListErrors(error.responseJSON))
            })
    })
}