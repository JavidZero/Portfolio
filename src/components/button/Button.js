import React from 'react'
import './Button.css'

const Styles = ['btn--primary', 'btn--outline'];
const Size = ['btn--medium', 'btn--large'];

function Button({
    buttonSize,
    buttonStyle,
    type,
    onClick,
    children
}) {

    const btnSize = Size.includes(buttonSize) ? buttonSize : Size[0];
    const btnStyle = Styles.includes(buttonStyle) ? buttonStyle : Styles[0];

    return (
        <button className={`btn ${btnSize} ${btnStyle}`}>
            {children}
        </button>
    )
}

export default Button
