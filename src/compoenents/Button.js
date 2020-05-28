import React from 'react';
import classes from './button.module.css';

const Button = props => {
    return(
        <div className={`${classes.button} ${props.style}`}>
            <span>{props.children}</span>
        </div>
    )
}

export default Button;