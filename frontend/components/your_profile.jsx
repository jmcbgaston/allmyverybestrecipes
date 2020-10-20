import React from 'react'
import { Switch, NavLink, Route } from 'react-router-dom' 
import YourRecipesContainer from './your_recipes_container'
import YourShoppingListContainer from './your_shopping_list_container'
import YourReviewsContainer from './your_reviews_container'

class YourProfile extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="yp-top-level">
                <h1 className="display-name">{this.props.currentUser.displayName}</h1>
                <ul className="yp-options">
                    <li>
                        <NavLink to="/your-profile/recipes" activeClassName="active-option"><i>Recipes</i></NavLink>
                    </li>
                    <li>
                        <NavLink to="/your-profile/shopping-list" activeClassName="active-option"><i>Shopping List</i></NavLink>
                    </li>
                    <li>
                        <NavLink to="/your-profile/reviews" activeClassName="active-option"><i>Reviews</i></NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/your-profile/recipes" component={YourRecipesContainer} />
                    <Route exact path="/your-profile/shopping-list" component={YourShoppingListContainer} />
                    <Route exact path="/your-profile/reviews" component={YourReviewsContainer} />
                </Switch>
            </div>
        )
    }
}

export default YourProfile