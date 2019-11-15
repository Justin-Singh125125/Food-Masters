import React from "react";

//components
import Hero from "../components/Hero";
import LoginCard from "../components/Login-Card";

//photos
import HeroImage from "../assets/img/food.jpg";


const test = props => {
    return (
        <div className="section-login">


            <LoginCard />
            <Hero img={HeroImage} />


        </div>
    )
}

export default test;