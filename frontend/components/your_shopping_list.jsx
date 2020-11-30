import React from 'react'

class YourShoppingList extends React.Component {
    constructor(props) {
        super(props)
        this.removeFromList = this.removeFromList.bind(this)
    }

    componentDidMount() {
        this.props.fetchShoppingList(this.props.currUser)
    }

    removeFromList(e) {
        e.preventDefault()

        let tempList = this.props.shoppingList
        let cloneList = { ...tempList }
        let newList = cloneList.items.filter(item => item !== e.currentTarget.closest('li').innerText.slice(2))
        cloneList.items = newList

        this.props.updateShoppingList(cloneList)
    }
    
    render() {

        if (!this.props.shoppingList.items) {
            return null
        }

        let list = this.props.shoppingList.items.map((ele, idx) => {
            return(
                <li key={idx} value={ele}>
                    <button 
                        id="toggle-negative"
                        onClick={this.removeFromList}>-</button>{ele}
                </li>
            )
        })

        if (list.length === 0) {
            return(
                <ul className="empty-shopping-list">
                    <li>Nothing on the shopping list yet!</li>
                </ul>
            )
        } else {
            return(
                <ul className="shopping-list-ul">
                    {list}
                </ul>
            )
        }
    }
}

export default YourShoppingList 