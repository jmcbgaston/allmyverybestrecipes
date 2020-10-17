
import React from 'react'
import { Link } from 'react-router-dom' 

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "", 
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    componentDidMount() {
        this.props.removeSessionErrors()
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, idx) => {
                    return <li key={idx}>{error}</li>
                })}
            </ul>
        )
    }

    handleChange(type) {
        return(e) => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.processForm(user)
    }

    render() {
        return (
            <div className="login-form-top-level">
                <p>Sign in with email.</p>
                <form onSubmit={this.handleSubmit}>
                    {this.renderErrors()}
                    <ul className="login-click-list">
                        <li>
                            <input type="text"
                                value={this.state.email}
                                placeholder="Email"
                                onChange={this.handleChange("email")}
                                />
                        </li>
                        <li>
                            <input type="password"
                                value={this.state.password}
                                placeholder="Password"
                                onChange={this.handleChange("password")}
                                />
                        </li>
                        <li>
                            <button type="submit">Sign In</button>
                        </li>
                        <li>
                            {this.props.navLink}
                        </li>
                    </ul>
                </form>
            </div>
        )
    }
}

export default LoginForm