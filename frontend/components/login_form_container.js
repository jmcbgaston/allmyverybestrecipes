import React from 'react'
import { connect } from "react-redux"
import LoginForm from "./login_form"
import { login, removeSessionErrors } from "../actions/session_actions"
import { Link } from 'react-router-dom' 

const mSTP = state => {
    return {
        errors: state.errors.sessionErrors,
        navLink: <Link to="/signup"><button className="nav-link-signup">New to Allmyverybestrecipes? <span className="join-for-free">Join for free!</span></button></Link>
    }
}

const mDTP = dispatch => {
    return {
        processForm: user => dispatch(login(user)),
        removeSessionErrors: () => dispatch(removeSessionErrors())
    }
}

export default connect(mSTP, mDTP)(LoginForm)