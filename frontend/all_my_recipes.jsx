
// TEST

import { login, logout, signup } from './actions/session_actions'
window.login = login
window.logout = logout
window.signup = signup

//

import React from 'react'
import ReactDOM from 'react-dom'

import configureStore from './store/store';
import Root from './components/root'

document.addEventListener("DOMContentLoaded", () => {

    let store;

    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { 
                    [window.currentUser.id]: {
                        id: window.currentUser.id, 
                        display_name: window.currentUser.display_name, 
                        email: window.currentUser.email 
                    } 
                }
            }, 
            session: {
                currentUser: window.currentUser.id
            }, 
            // ui: {
            //     modalOpen: true
            // }, 
            errors: {
                // userErrors: [], 
                sessionErrors: [], 
                // postErrors: []
            }
        };

        // if current user exists, set up with updated state
        store = configureStore(preloadedState);
        // delete window.currentUser;

        // TESTING
            window.getState = store.getState
            window.dispatch = store.dispatch
        //

    } else {

        // if no current user then set up with default state
        store = configureStore();

        // TESTING
            window.getState = store.getState
            window.dispatch = store.dispatch
        //
    }

    let root = document.getElementById("root")
    ReactDOM.render(<Root store={store} />, root)

    console.log("hi")
})

