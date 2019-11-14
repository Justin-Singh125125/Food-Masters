import React from "react";

const Hero = props => {
    return (
        <div className="hero">
            <img src={props.img} alt="food" className="hero__img" />
        </div>
    )
}

export default Hero;