
import React from 'react'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "", 
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
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
            <div>
                <p>Sign in with email.</p>
                <form onSubmit={this.handleSubmit}>
                    {this.renderErrors()}
                    <input type="text"
                        value={this.state.email}
                        placeholder="Email"
                        onChange={this.handleChange("email")}
                        />
                    <br/>
                    <input type="password"
                        value={this.state.password}
                        placeholder="Password (minimum 6 characters)"
                        onChange={this.handleChange("password")}
                        />
                    <br/>
                    <button type="submit">Sign In</button>
                    <br/>
                    <button>{this.props.navLink}</button>
                </form>
            </div>
        )
    }
}

export default LoginForm