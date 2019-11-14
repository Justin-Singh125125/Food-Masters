import React from "react";

import Hero from "../components/Hero";

import HeroImage from "../assets/img/food.jpg";

const test = props => {
    return (
        <div className="section-login">

            <div className="section-login__hero">
                <Hero img={HeroImage} />
            </div>

        </div>
    )
}

export default test;