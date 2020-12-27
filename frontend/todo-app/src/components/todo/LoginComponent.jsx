import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: 'daniel',
            password: '',
            loginSucess: false,
            showMessage: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);

    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                {this.state.showMessage && <div className="alert alert-warning">Invalid Credentials</div>}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
            </div>
        )
    }


    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    loginClicked() {
        if (this.state.username === 'daniel' && this.state.password === 'binyamin') {
            AuthenticationService.redgisterSuccesfullLogin(this.state.username, this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
        }
        else {
            this.setState({ loginSucess: false })
            this.setState({ showMessage: true })
        }
    }

}

export default LoginComponent