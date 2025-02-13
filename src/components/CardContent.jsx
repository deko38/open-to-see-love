import React from "react";
import classes from "../modules/CardContent.module.css";

const CardContent = ({ children }) => {
    return <div className={classes['cardContent']}>{children}</div>;
};

export default CardContent;
