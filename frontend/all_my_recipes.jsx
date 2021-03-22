import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store';
import Root from './components/root'

import { fetchRecipes, fetchRecipe } from './actions/recipe_actions'
window.fetchRecipes = fetchRecipes
window.fetchRecipe = fetchRecipe

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
            errors: {
                sessionErrors: [], 
            }
        };
        store = configureStore(preloadedState);
        window.getState = store.getState
        window.dispatch = store.dispatch
    } else {
        store = configureStore();
        
        window.getState = store.getState
        window.dispatch = store.dispatch
    }

    let root = document.getElementById("root")
    ReactDOM.render(<Root store={store} />, root)
})

