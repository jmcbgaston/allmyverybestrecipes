import { connect } from 'react-redux'
import YourShoppingList from './your_shopping_list'
import { fetchShoppingList, updateShoppingList } from '../actions/shopping_list_actions'

const mSTP = state => {
    let currUser = state.session.currentUser
    let shoppingList = state.entities.shoppingList
    
    return {
        shoppingList, 
        currUser
    }
}

const mDTP = dispatch => {
    return {
        fetchShoppingList: listId => dispatch(fetchShoppingList(listId)), 
        updateShoppingList: list => dispatch(updateShoppingList(list))
    }
}

export default connect(mSTP, mDTP)(YourShoppingList)