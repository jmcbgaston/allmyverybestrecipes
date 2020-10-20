import React from 'react'
import { connect } from "react-redux"
import YourProfile from "./your_profile"
import { Link } from 'react-router-dom'

const mSTP = ({ entities: { users }, session }) => {

    let userId = session.currentUser
    let currentUser = users[session.currentUser]

    return {
        currentUserId: userId, 
        currentUser
    }
}

const mDTP = dispatch => {
    return {

    }
}

export default connect(mSTP, mDTP)(YourProfile)