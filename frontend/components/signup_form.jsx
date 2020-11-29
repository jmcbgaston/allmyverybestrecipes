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

    componentDidMount() {
        this.props.removeSessionErrors()
    }

    renderErrors() {
        return (
            <ul className="form-errors">
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
            <div className="signup-form-top-level">
                <p>Sign up with email. {this.props.navLink}</p>
                    {this.renderErrors()}
                <form onSubmit={this.handleSubmit}>
                    <ul className="signup-click-list">
                        <li>
                            <input type="text"
                                value={this.state.display_name}
                                placeholder="Display name"
                                onChange={this.handleChange("display_name")}
                            />
                        </li>
                        <li>
                            <input type="email"
                                value={this.state.email}
                                placeholder="Email"
                                onChange={this.handleChange("email")}
                            />
                        </li>
                        <li>
                            <input type="password"
                                value={this.state.password}
                                placeholder="Password (minimum 6 characters)"
                                onChange={this.handleChange("password")}
                            />
                        </li>
                        <li>
                            <button type="submit">Create my account</button>
                        </li>
                    </ul>
                </form>
            </div>
        )
    }
}

export default SignupForm