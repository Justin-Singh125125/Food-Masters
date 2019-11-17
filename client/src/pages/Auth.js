import React from "react";

//components
import Hero from "../components/Hero";
import LoginCard from "../components/Login-Card";
import SignupCard from "../components/Signup-Card";

//photos
import HeroImage from "../assets/img/food.jpg";



class Auth extends React.Component {

    state = {
        showLogin: true,
    }

    //renders if it is either the login screen or the sign in screen
    handleAuthState = () => {
        if (this.state.showLogin) {
            this.setState({ showLogin: false });
        }
        else {
            this.setState({ showLogin: true });
        }
    }

    render() {
        return (
            <div className="section-login">

                {this.state.showLogin ?
                    <LoginCard handleAuthState={this.handleAuthState} />
                    :
                    <SignupCard handleAuthState={this.handleAuthState} />}

                <Hero img={HeroImage} />


            </div>
        )
    }
}

export default Auth;

