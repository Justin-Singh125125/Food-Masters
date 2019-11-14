import React from "react";

//food photo
import FoodImage from "../assets/img/food.jpg";

const test = props => {
    return (
        <div className="login">

            <div className="login__test">

                <img src={FoodImage} alt="" className="login__img" />
            </div>
        </div>
    )
}

export default test;