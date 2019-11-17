import React, { Component } from 'react';
import Axios from "axios";

import FormInput from "./Form-Input";



class LoginCard extends Component {

    state = {

    };

    handleInputChange = (e) => {

        this.setState({ [e.target.name]: e.target.value });
    }

    handleLogin = async () => {

        if (this.state.email && this.state.password) {
            console.log("email:" + this.state.email);
            console.log("password: " + this.state.password);

            var userObj = {
                email: this.state.email,
                password: this.state.password
            }

            var loggedUser = await Axios.post("/api/user/login", userObj);

            console.log(loggedUser);

        }

    }

    render() {
        return (
            <div className="login-card">

                <form className="login-card__form">
                    <FormInput handleInputChange={this.handleInputChange} value={this.state.email} type="text" label="Email" name="email" placeholder="JohnDoe327@gmail.com" />
                    <FormInput handleInputChange={this.handleInputChange} value={this.state.password} type="password" label="Password" name="password" placeholder="super secret" />
                </form>

                <div className="login-card__button">
                    <button onClick={this.handleLogin} className="login-card__button--login">Login</button>
                </div>

                <span className="login-card__redirect">Not a member? <a onClick={this.props.handleAuthState} href="#" className="login-card__link">Sign up</a></span>

            </div>
        );
    }
}

export default LoginCard;