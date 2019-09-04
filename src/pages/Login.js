import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: ""
        }
    }

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault()
        const user = {
            username: this.state.username,
            email: "fake@email.com",
            password: "yolo"
        }
        // const myHeaders = new Headers();
        const myInit = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
            // mode: 'cors',
        };

        fetch('http://localhost:3000/users/', myInit).then(response => console.log(response))
    }

    onSubmitFormXML = (e) => {
        e.preventDefault()
        const user = {
            username: this.state.username,
            email: "fake@email.com",
            password: "yolo"
        }
        const request = new XMLHttpRequest();
        request.open('POST', "http://localhost:3000/users/")
        request.setRequestHeader("Content-Type", "application/json")
        request.send(JSON.stringify(user))
    }

    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <form>
                    <label htmlFor="username">Username: </label>
                    <input 
                        type="text"
                        id="username" placeholder="Enter your username"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                    />
                    <button onClick={this.onSubmitForm}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Login