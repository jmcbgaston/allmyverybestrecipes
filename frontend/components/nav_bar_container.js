
import { connect } from "react-redux"
import NavBar from "./nav_bar"
import { logout } from "../actions/session_actions"

const mSTP = ({ entities: { users }, session }) => {
// why can do ^ this here but not in my presentational component

    let userId = session.currentUser
    let currentUser = users[session.currentUser]
// i dont like these variables

    return {
        currentUserId: userId, 
        currentUser
    }
// i dont like these props

}

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mSTP, mDTP)(NavBar)
