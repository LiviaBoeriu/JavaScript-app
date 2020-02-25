import React from 'react';
import './Button.scss';

function Button(props) {
    return (
        <button 
            className={"button" + (props.align==="right" ? " button-right" : "")} 
            onClick={(e) => props.handleClick(e)}>
                {props.name}
        </button>
    )
}

export default Button;