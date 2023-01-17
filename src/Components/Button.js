import React from 'react'


import { Link } from 'react-router-dom'
import '../Styles/button.css'

const Styles = ['btn--primary', 'btn--outline'];
const Sizes = ['btn--medium', 'btn--large'];

function Button({ children, type, onClick, buttonStyle, buttonSize }) {

    const checkButtonStyle = Styles.includes(buttonStyle) ? buttonStyle : Styles[0];
    const checkButtonSize = Sizes.includes(buttonSize) ? buttonSize : Sizes[0];

    return (
        <Link to="/signup" className='btn-mobile'>
            <button className={`btn ${buttonStyle} ${buttonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    )
}

export default Button