import React, { Component } from 'react'

const InputForm = (props) => {
    const {field, type, onChangeInput} = props
    console.log(type)
    return (
        <>
            <label htmlFor={field}>{field}</label>
            <input type={type} name={field} id={field} onChange={(event) => onChangeInput(event, field)} />
        </>
    )
}

class Register extends Component {
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
            email: this.state.email,
            password: this.state.password
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
            email: this.state.email,
            password: this.state.password
        }
        const request = new XMLHttpRequest();
        request.open('POST', "http://localhost:3000/users/")
        request.setRequestHeader("Content-Type", "application/json")
        request.send(JSON.stringify(user))
    }

    onChangeInput = (event, key) => {
        this.setState({
            [key]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Register Page</h1>
                <form>
                    <InputForm type="text" field="username" onChangeInput={this.onChangeInput} />
                    <InputForm type="email" field="email" onChangeInput={this.onChangeInput} />
                    <InputForm type="password" field="password" onChangeInput={this.onChangeInput} />
                    <button onClick={this.onSubmitForm}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Register