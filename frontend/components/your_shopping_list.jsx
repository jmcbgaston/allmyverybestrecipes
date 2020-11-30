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
        debugger

        let newList = cloneList.items.filter(item => item !== e.currentTarget.closest('li').innerText.slice(1))

        cloneList.items = newList

        this.props.updateShoppingList(cloneList)
    }
    
    render() {

        if (!this.props.shoppingList.items) {
            return null
        }

        let list = this.props.shoppingList.items.map((ele, idx) => {
            return(
                <li key={idx}>
                    <button onClick={this.removeFromList}>-</button>
                    {ele}
                </li>
            )
        })

        if (list.length === 0) {
            return(
                <ul>Shopping List
                    <li>Nothing on the shopping list yet!</li>
                </ul>
            )
        } else {
            return(
                <div>
                    <ul>Shopping List
                        {list}
                    </ul>
                </div>
            )
        }
    }
}

export default YourShoppingList 