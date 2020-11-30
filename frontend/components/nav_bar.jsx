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
            <button className="yp-dropdown">Your Account ▾
                <ul className="yp-dropdown-content">
                    <p>ACCOUNT</p>
                    <li>
                        <Link to="/your-profile/recipes">Your Profile</Link>
                    </li>
                    <li>
                        <Link to="/" onClick={props.logout}>Log Out</Link>
                    </li>
                    <p>MORE</p>
                    <li>
                        <Link to="/your-profile/shopping-list">Shopping List</Link>
                    </li>
                </ul>
            </button>
        </nav>
    )
}

export default NavBar

// THIS PAGE NEEDS FIXING
// I dont like how we're getting the user, 
// it's redundant