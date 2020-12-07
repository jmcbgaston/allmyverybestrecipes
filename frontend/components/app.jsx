import React from 'react';
import { Switch, Link, Redirect, Route } from 'react-router-dom';

import NavBarContainer from './nav_bar_container';
import RecipeIndexContainer from './recipe_index_container'
import LogInFormContainer from './login_form_container';
import SignUpFormContainer from './signup_form_container';
import YourProfileContainer from './your_profile_container'
import CreateRecipeFormContainer from './create_recipe_form_container' 
import EditRecipeFormContainer from './edit_recipe_form_container' 
import RecipeShowContainer from './recipe_show_container' 

import { AuthRoute } from '../util/route_util';
import { ProtectedRoute } from '../util/route_util';

const App = () => {
  return (
    <div className="content-container">
      <header className="header-bar">

        <meta name="description" content="AllMyVeryBestRecipes App" />
        <meta name="title" property="og:title" content="AllMyVeryBestRecipes" />
        <meta property="og:type" content="Website" />
        <meta 
          name="image" 
          property="og:image" 
          content="https://live.staticflickr.com/65535/50691044433_e117c4c4f8_k.jpg" />
        <meta name="description" property="og:description" content="AllMyVeryBestRecipes App" />
        <meta name="author" content="Jose Gaston" />

        <Link to="/">
          <img className="logo" src="/assets/allrecipes-logo.png" alt="logo"/>
        </Link>
        <NavBarContainer />
      </header>
      <Switch>
        <Route exact path="/" component={RecipeIndexContainer} />
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <ProtectedRoute path="/your-profile" component={YourProfileContainer} />
        <ProtectedRoute path="/recipes/new" component={CreateRecipeFormContainer} />
        <Route path="/recipes/:recipeId/edit" component={EditRecipeFormContainer} />
        <Route path="/recipes/:recipeId" component={RecipeShowContainer} />
        <Redirect to="/" />
      </Switch>
      <footer>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/jose-maria-canuto-b-gaston-904411115/" target="_blank">
              <img src="/assets/linkedin.png" alt="LinkedIn Link"/></a>
          </li>
          <li>
            <a href="https://github.com/jmcbgaston" target="_blank">
              <img src="/assets/github.png" alt="GitHub Link"/></a>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default App;
