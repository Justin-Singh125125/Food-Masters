import React from "react";

//components
import FormInput from "../components/Form-Input";

const LoginCard = props => {
    return (
        <div className="login-card">
            <h2 className="login-card__header">Login</h2>
            <form className="login-card__form">
                <FormInput type="text" label="User Name" name="userName" placeholder="JohnDoe327" />
                <FormInput type="password" label="Password" name="password" placeholder="super secret" />
            </form>

            <div className="login-card__button">
                <button className="login-card__button--login">Login</button>
            </div>

            {/* <span className="login__redirect">Already a member? <a href="" className="login__link"></a></span> */}

        </div>
    )
}

export default LoginCard;