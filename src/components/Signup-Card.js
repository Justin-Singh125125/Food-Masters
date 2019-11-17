import React, { Component } from 'react';

//components
import FormInput from "./Form-Input";

class SignupCard extends Component {


    state = {}

    handleInputChange = (e) => {

        this.setState({ [e.target.name]: e.target.value });
    }

    handleSignup = () => {

        if (this.state.name && this.state.email && this.state.password && this.state.confirmPassword) {
            console.log("name: " + this.state.name)
            console.log("email: " + this.state.email)
            console.log("password: " + this.state.password)
            console.log("confirmPassword: " + this.state.confirmPassword)
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