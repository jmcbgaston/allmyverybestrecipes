import { connect } from "react-redux"
import NavBar from "./nav_bar"
import { logout, login } from "../actions/session_actions"
import { fetchShoppingList } from "../actions/shopping_list_actions"

const mSTP = ({ entities: { users }, session }) => {
// why can do ^ this here but not in my presentational component

    let userId = session.currentUser
    let currentUser = users[session.currentUser]
// i dont like these variables

    return {
        currentUserId: userId, 
        currentUser, 
        demoUser: { 
            email: "demo@login.com", 
            password: "password"
        }
    }
// i dont like these props

}

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout()), 
        login: user => dispatch(login(user))
    }
}

export default connect(mSTP, mDTP)(NavBar)
