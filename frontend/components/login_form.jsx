
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
                    <li>{error}</li>
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
        // debugger;
        return (
            <div>
                <p>Sign in with email.</p>
                <p>{this.props.navLink}</p>
                <form onSubmit={this.handleSubmit}>
                    {this.renderErrors()}
                    <label>e</label>
                    <input type="text"
                        value={this.state.email}
                        onChange={this.handleChange("email")}
                    />
                    <br/>
                    <label>p</label>
                    <input type="password"
                        value={this.state.password}
                        onChange={this.handleChange("password")}
                    />
                    <br/>
                    <button type="submit">Sign In</button>
                    {/* <button type="submit"
                        value="New to Allmyverybestrecipes? Join for free!" /> */}
                    {/* add this when you get everything else to work */}
                    
                </form>
            </div>
        )
    }
}

export default LoginForm