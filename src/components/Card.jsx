import React from "react";
import classes from "../modules/Card.module.css";

const Card = ({ children, className }) => {
    return (
        <div className={`${classes['card']} ${className}`}>
            {children}
        </div>
    );
};

export default Card;
