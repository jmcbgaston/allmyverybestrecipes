
import React from 'react';
import { Switch, Link } from 'react-router-dom';

import HomepageContainer from './homepage_container';
import SignUpFormContainer from './signup_form_container';
import LogInFormContainer from './login_form_container';

import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>All My Recipes</h1>
      </Link>
      <HomepageContainer />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;
