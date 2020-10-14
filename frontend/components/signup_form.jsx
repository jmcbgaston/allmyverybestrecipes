
import React from 'react'

class SignupForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display_name: "", 
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
        return (
            <div>
                <p>Sign up with email.</p>
                <p>{this.props.navLink}</p>
                <form onSubmit={this.handleSubmit}>
                    {this.renderErrors()}
                    <label>dn</label>
                    <input type="text"
                        value={this.state.display_name}
                        placeholder="Display name"
                        onChange={this.handleChange("display_name")}
                    />
                    <br/>
                    <label>e</label>
                    <input type="text"
                        value={this.state.email}
                        placeholder="Email"
                        onChange={this.handleChange("email")}
                    />
                    <br/>
                    <label>p</label>
                    <input type="password"
                        value={this.state.password}
                        placeholder="Password"
                        onChange={this.handleChange("password")}
                    />
                    <br/>
                    <button type="submit">Create my account</button>
                </form>
            </div>
        )
    }
}

export default SignupForm