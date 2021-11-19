import React from "react";

const FormGroup = (props) => {
    return (
        <div className="form-group">
            <label htmlFor={props.htmlFor}>{props.label}</label>
            {props.children}
        </div>
    );
}

export default FormGroup;