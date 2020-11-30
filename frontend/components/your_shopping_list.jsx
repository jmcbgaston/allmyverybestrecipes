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

        return(
            <h1>I AM THE SHOPPING LIST COMPONENT</h1>
        )
    }
}

export default YourShoppingList 