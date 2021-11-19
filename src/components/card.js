import React from "react";

const Card = (props) => {
    return (
        <div className="card md-3">
            <h3 className="card-header">{props.title}</h3>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    );
}

export default Card;