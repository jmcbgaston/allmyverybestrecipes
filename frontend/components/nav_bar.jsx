
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
    return (!props.currentUserId) ? (
        <nav className="nav-container">
            <Link className="signup" to="/signup"><i>Join Now</i></Link>
            <Link className="login" to="/login"><i>Login</i></Link>
            <button type="submit" className="demo" onClick={() => props.login(props.demoUser)}><i>Demo Login</i></button>
        </nav>
    ) : (
        <nav className="logged-in-nav-container">
            <ul className="your-profile-dropdown">
                <p><i>Your Profile ▾</i></p>
                <Link to="/" onClick={props.logout}><i>Log Out</i></Link>
            </ul>
        </nav>
    )
}

export default NavBar

// THIS PAGE NEEDS FIXING
// I dont like how we're getting the user, 
// it's redundant