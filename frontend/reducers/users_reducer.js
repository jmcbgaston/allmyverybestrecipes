
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const userReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    // let newState = Object.assign({}, oldState)
    let newState;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState = Object.assign({}, oldState, { 
                [action.currentUser.id]: action.currentUser 
            })
            return newState
        default:
            return oldState;
    }
}

export default userReducer;