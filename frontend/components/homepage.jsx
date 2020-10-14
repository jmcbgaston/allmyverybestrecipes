
import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = props => {
    return (!props.currentUserId) ? (
        <nav>
            <Link to="/signup">Join Now</Link>
            <Link to="/login">Log In</Link>
        </nav>
    ) : (
        <nav>
            <h1>Welcome, {props.currentUser.display_name}</h1>
            <button type="submit" onClick={props.logout}>Log Out</button>
        </nav>
    )

}

export default Homepage

// THIS PAGE NEEDS FIXING
// I dont like how we're getting the user, 
// it's redundant