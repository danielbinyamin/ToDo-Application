import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService.js'

class WelcomeComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            welcomeMessage : '',
            errorMessage : '',
            isError : false

        }

        this.getWelcomeMessage = this.getWelcomeMessage.bind(this)
        this.handleResponse = this.handleResponse.bind(this)
        this.handleError = this.handleError.bind(this)
    }


    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link>.
                </div>
                <div className="container">
                    Click here for hello world bean:
                   <button onClick={this.getWelcomeMessage} className="btn btn-success">GET</button>
                </div>
                {this.state.isError && <div className="alert alert-warning">Error: {this.state.errorMessage} </div>}
                {!this.state.isError && <div className="container">message: {this.state.welcomeMessage} </div>}
            </>
        )
    }
    getWelcomeMessage() {
        // HelloWorldService.executeHelloWorldBeanService()
        // .then(response => this.handleResponse(response))
        HelloWorldService.executeHelloWorldpathVarService(this.props.match.params.name)
        .then(response => this.handleResponse(response))
        .catch(error => this.handleError(error))
    }

    handleResponse(response) {
        this.setState({welcomeMessage : response.data.message})
        this.setState({isError : false})
    }

    handleError(error) {
        this.setState({errorMessage : error.response.data.message})
        this.setState({isError : true})
    }
}



export default WelcomeComponent