
import React from 'react'
import { connect } from "react-redux"
import LoginForm from "./login_form"
import { login, removeSessionErrors } from "../actions/session_actions"
import { Link } from 'react-router-dom' 

const mSTP = state => {
    // debugger
    return {
        errors: state.errors.sessionErrors,
        // errors: state.errors.sessionErrors.errors,
        // emptyError: state.errors.sessionErrors.emptyError, 
        navLink: <Link to="/signup">New to Allmyverybestrecipes? <span className="join-for-free">Join for free!</span></Link> 
    }
}

const mDTP = dispatch => {
    return {
        processForm: user => dispatch(login(user)),
        // refreshError: () => dispatch(refreshError())
        removeSessionErrors: () => dispatch(removeSessionErrors())
    }
}

export default connect(mSTP, mDTP)(LoginForm)