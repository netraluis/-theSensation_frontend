import React from 'react';

import './button.css';

// import CustomButtonContainer from './custom-button.styles';

const Button  = //se pueden quitar todas las props para user css component he borrado isGoogleSignIn para que vaya con component css
({children, inverted, isGoogleSignIn, ...otherProps}) =>(
    <button className = {`${inverted ? 'inverted':''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default Button;