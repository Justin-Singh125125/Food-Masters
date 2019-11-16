import React from "react";

//components
import FormInput from "../components/Form-Input";

const LoginCard = props => {
    return (

        <div className="login-card">

            <h2 className="login-card__header">{props.showLogin ? "Login" : "Sign Up"}</h2>
            <form className="login-card__form">
                <FormInput type="text" label="User Name" name="userName" placeholder="JohnDoe327" />
                <FormInput type="password" label="Password" name="password" placeholder="super secret" />
            </form>

            <div className="login-card__button">
                <button className="login-card__button--login">Login</button>
            </div>

            <span className="login-card__redirect">Not a member? <a onClick={props.handleAuthState} href="#" className="login-card__link">Sign up</a></span>

        </div>
    )
}

export default LoginCard;