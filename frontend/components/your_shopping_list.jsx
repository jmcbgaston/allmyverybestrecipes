import React from 'react'

class YourShoppingList extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        debugger

        this.props.fetchShoppingList(this.props.currUser)
    }
    
    render() {
        debugger;

        if (!this.props.shoppingList) {
            return null
        }

        let list = this.props.shoppingList.map((ele, idx) => {
            debugger

            return(
                <li key={idx}>
                    {ele}
                </li>
            )
        })

        return(
            <div>
                <ul>Shopping List
                    {list}
                </ul>
            </div>
        )
    }
}

export default YourShoppingList 