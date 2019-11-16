import React from "react";

//components
import Hero from "../components/Hero";
import LoginCard from "../components/Login-Card";

//photos
import HeroImage from "../assets/img/food.jpg";



class Login extends React.Component {

    state = {
        showLogin: true
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


                <LoginCard
                    showLogin={this.state.showLogin}
                    handleAuthState={this.handleAuthState}
                />
                <Hero img={HeroImage} />


            </div>
        )
    }
}

export default Login;