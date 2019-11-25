import React, { Component } from 'react';

//components
import FormInput from "./Form-Input";

import axios from "axios";

class SignupCard extends Component {


    state = {}

    handleInputChange = (e) => {

        this.setState({ [e.target.name]: e.target.value });
    }

    handleSignup = async () => {

        if (this.state.name && this.state.email && this.state.password && this.state.confirmPassword) {


            var userObj = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            }

            var newUser = await axios.post("/api/user", userObj);

            console.log(newUser);
        }

    }

    render() {

        return (
            <div className="signup-card">

                <form className="login-card__form">
                    <FormInput handleInputChange={this.handleInputChange} type="text" label="Name" name="name" placeholder="John Doe" />
                    <FormInput handleInputChange={this.handleInputChange} type="text" label="Email" name="email" placeholder="johnDoe@gmail.com" />
                    <FormInput handleInputChange={this.handleInputChange} type="password" label="password" name="password" placeholder="Super Secret" />
                    <FormInput handleInputChange={this.handleInputChange} type="password" label="confirm password" name="confirmPassword" placeholder="Super Secret" />
                </form>

                <div className="login-card__button">
                    <button onClick={this.handleSignup} className="login-card__button--login">Sign Up</button>
                </div>

                <span className="login-card__redirect">Already a member? <a onClick={this.props.handleAuthState} href="#" className="login-card__link">Login</a></span>

            </div>
        );
    }
}

export default SignupCard;