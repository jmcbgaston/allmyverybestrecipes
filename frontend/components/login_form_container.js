
import React from 'react'
import { connect } from "react-redux"
import LoginForm from "./login_form"
import { login } from "../actions/session_actions"
import { Link } from 'react-router-dom' 

const mSTP = state => {
    return {
        errors: state.errors.sessionErrors,
        navLink: <Link to="/signup">New to Allmyverybestrecipes? Join for free!</Link>, 
    }
}

const mDTP = dispatch => {
    return {
        processForm: user => dispatch(login(user)), 
    }
}

export default connect(mSTP, mDTP)(LoginForm)