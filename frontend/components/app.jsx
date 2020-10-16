
import React from 'react';
import { Switch, Link } from 'react-router-dom';

import NavBarContainer from './nav_bar_container';
import SignUpFormContainer from './signup_form_container';
import LogInFormContainer from './login_form_container';

import { AuthRoute } from '../util/route_util';
import { ProtectedRoute } from '../util/route_util';

const App = () => {
  return (
    <div className="header-main">
      <header className="header-bar">
        <Link to="/">
          <img className="logo" src="/assets/allrecipes-logo.png" alt="logo"/>
        </Link>
        <NavBarContainer />
      </header>
      <Switch>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      </Switch>
    </div>
  )
}

export default App;
