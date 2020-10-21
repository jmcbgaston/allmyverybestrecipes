import React from 'react';
import { Switch, Link, Redirect, Route } from 'react-router-dom';

import NavBarContainer from './nav_bar_container';
import SignUpFormContainer from './signup_form_container';
import LogInFormContainer from './login_form_container';
import YourProfileContainer from './your_profile_container'
import CreateRecipeFormContainer from '../components/create_recipe_form_container' 
import EditRecipeFormContainer from '../components/edit_recipe_form_container' 


import { AuthRoute } from '../util/route_util';
import { ProtectedRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <header className="header-bar">
        <Link to="/">
          <img className="logo" src="/assets/allrecipes-logo.png" alt="logo"/>
        </Link>
        <NavBarContainer />
      </header>
      <Switch>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <ProtectedRoute path="/your-profile" component={YourProfileContainer} />
        <ProtectedRoute path="/recipes/new" component={CreateRecipeFormContainer} />
        <Route path="/recipes/:recipeId/edit" component={EditRecipeFormContainer} />

        {/* <ProtectedRoute path="/recipes" component={RecipesIndexContainer} /> */}

        {/* <ProtectedRoute path="/recipes/recipeId" component={RecipesIndexItemContainer} /> */}

        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default App;
