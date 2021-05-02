import React from 'react';

import './button.css';


const Button  =({children}) =>(
    <button className = 'custom-button'>
        {children}
    </button>
)

export default Button;