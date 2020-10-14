
import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

// actions

const receiveCurrentUser = (currentUser) => {
// export const receiveCurrentUser = (currentUser) => {

    return {
        type: RECEIVE_CURRENT_USER, 
        currentUser
    }
}

const logoutCurrentUser = () => {
// export const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER, 
    }
}

const receiveSessionErrors = (errors) => {
// export const receiveSessionErrors = (errors) => {
    return {
        type: RECEIVE_SESSION_ERRORS, 
        errors
    }
}

// thunk actions

    // signup
export const signup = (user) => {
    return (dispatch => {
        return SessionAPIUtil.signup(user)
            .then(user => {
                return dispatch(receiveCurrentUser(user))
            }, error => {
                return dispatch(receiveSessionErrors(error.responseJSON))
            })
    })
}

    // login
export const login = (user) => {
    return (dispatch => {
        return SessionAPIUtil.login(user)
            .then(user => {
                return dispatch(receiveCurrentUser(user))
            }, error => {
                return dispatch(receiveSessionErrors(error.responseJSON))
            })
    })
}

    // logout
export const logout = () => {
    return (dispatch => {
        return SessionAPIUtil.logout()
            .then(() => {
                return dispatch(logoutCurrentUser())
            }, error => {
                return dispatch(receiveSessionErrors(error.responseJSON))
            })
    })
}
