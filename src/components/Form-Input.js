import React from "react";

const FormInput = props => {
    return (
        <div className="form-input">
            <label className="form-input__label">{props.label}</label>
            <input onChange={props.handleInputChange} type={props.type} className="form-input__input" name={props.name} placeholder={props.placeholder} />
        </div>
    )
}

export default FormInput;