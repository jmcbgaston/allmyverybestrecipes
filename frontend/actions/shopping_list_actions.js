import * as ListAPIUtil from '../util/shopping_list_api_util'

export const RECEIVE_LIST = "RECEIVE_LIST"
export const RECEIVE_EMPTY_LIST = "RECEIVE_EMPTY_LIST"
export const REMOVE_LIST = "REMOVE_LIST"
export const RECEIVE_LIST_ERRORS = "RECEIVE_LIST_ERRORS"
export const REMOVE_LIST_ERRORS = "REMOVE_LIST_ERRORS"

const receiveList = list => {
    return {
        type: RECEIVE_LIST, 
        list
    }
}

// const receiveEmptyList = () => {
//     return {
//         type: RECEIVE_EMPTY_LIST, 
//         eList: {}
//     }
// }

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
    // debugger
    
    return (dispatch => {
        return ListAPIUtil.fetchShoppingList(listId)
            .then(list => {

                if (list.items === null) {
                    list.items = []
                }

                return dispatch(receiveList(list))
            }, error => {
                return dispatch(receiveListErrors(error.responseJSON))
            })
    })
}

// export const fetchEmptyList = () => {
//     // debugger

//     return dispatch(receiveEmptyList())
// }

export const updateShoppingList = (list) => {
    return (dispatch => {
        return ListAPIUtil.updateShoppingList(list)
            .then(updatedList => {
                if (updatedList.items === null) {
                    updatedList.items = []
                }
                return dispatch(receiveList(updatedList))
            }, error => {
                return dispatch(receiveListErrors(error.responseJSON))
            })
    })
}