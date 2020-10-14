
import React from 'react';
import { Provider } from 'react-redux';
// https://react-redux.js.org/api/provider
// Gives routes access to the store

import { HashRouter } from 'react-router-dom';
// https://reactrouter.com/web/api/HashRouter
// gives us access to Link / NavLink / ...

import App from './app';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

export default Root;
