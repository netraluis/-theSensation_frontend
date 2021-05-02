import React, { useState } from 'react';
import Button from '../button/button'
import './textHide.css'

const TextHide=(props) =>{
    const [show, setShow] = useState(false)
    const {title, first, second} = props

    const buttonTouch = () => {
        setShow(!show)
    }
    return(
    <div className='textHide-container'>
        <h4 className='textHide-title'>{title}</h4>
        <div className='textHide-text'>
            <p>{first}</p>
            <div style={{display: `${show ? '': 'none'}`}} >
            {second.map(text=><p key = {text}>{text}</p>)}
            </div>
            
        </div>
        <div className='textHide-container-button'>
            <Button onClick={buttonTouch}>{show ? '-': '+'}</Button>
        </div>
    </div>
    )}

export default TextHide