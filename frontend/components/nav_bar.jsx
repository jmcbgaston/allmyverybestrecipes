
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
    return (!props.currentUserId) ? (
        <nav>
            <Link to="/signup">Join Now</Link>
            <Link to="/login">Log In</Link>
            <button type="submit" onClick={() => props.login(props.demoUser)}>Demo Login</button>
        </nav>
    ) : (
        <nav>
            <h1>Welcome, {props.currentUser.display_name}</h1>
            <button type="submit" onClick={props.logout}>Log Out</button>
        </nav>
    )

}

export default NavBar

// THIS PAGE NEEDS FIXING
// I dont like how we're getting the user, 
// it's redundant