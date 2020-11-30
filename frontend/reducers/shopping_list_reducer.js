import { RECEIVE_LIST } from '../actions/shopping_list_actions'

const shoppingListReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
 
    switch (action.type) {
        case RECEIVE_LIST:
            debugger
            
            return action.list
        default:
            return oldState;
    }
}

export default shoppingListReducer;