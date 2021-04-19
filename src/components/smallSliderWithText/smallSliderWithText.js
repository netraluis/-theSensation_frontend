import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "./smallSliderWithText.css";
import Button from '../../components/button/button'
import React, { useState, useEffect } from 'react';
// '.'

/*
[{
  url,
  alt,
  text,
  button
}]
*/
const SliderImageLeftText = ({ array, title, text, price, room, history, startDate, endDate }) => {
  // const { array, title, text, price, room, history } = props;
  let host = `${window.location.protocol}//${window.location.host}/`;

  const onClick = () => {
    history.push(`/booking-extras/${startDate}/${endDate}/${room}`)
  }
  
  return (
    <div className="sliderLeftText-outside">
      <div className="sliderLeftText">
        <div className="sliderLeftText-container">
          <AwesomeSlider>
            {array.map((imageObject) => (
              <div key={imageObject.url} className="sliderLeftText-image">
                <img
                  style={image}
                  src={`${host}static/images/${imageObject.url}`}
                  alt={`${imageObject.alt}`}
                />
              </div>
            ))}
          </AwesomeSlider>
        </div>
        <div className="sliderLeftText-text">
          <h3>{title}</h3>
          <p>{text}</p>
          <div>
            <div>{price}</div><Button onClick={onClick}>RESERVAR</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderImageLeftText;

const image = {
  width: "100%",
};
