// TESTING

// // import { fetchRecipes, fetchRecipe, createRecipe, updateRecipe, deleteRecipe} from './util/recipe_api_util'
// import { fetchRecipes, fetchRecipe, createRecipe, updateRecipe, deleteRecipe } from './actions/recipe_actions'
// window.fetchRecipes = fetchRecipes
// window.fetchRecipe = fetchRecipe
// window.createRecipe = createRecipe
// window.updateRecipe = updateRecipe
// window.deleteRecipe = deleteRecipe

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
                        displayName: window.currentUser.displayName, 
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
        store = configureStore(preloadedState);
        // delete window.currentUser;

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

