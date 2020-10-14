
import React from 'react'
import { connect } from "react-redux"
import SignupForm from "./signup_form"
import { signup } from "../actions/session_actions"
import { Link } from 'react-router-dom' 

const mSTP = state => {
    return {
        errors: state.errors.sessionErrors,
        navLink: <Link to="/login">Already a member? Sign in!</Link>
    }
}

const mDTP = dispatch => {
    return {
        processForm: user => dispatch(signup(user)), 
    }
}

export default connect(mSTP, mDTP)(SignupForm)