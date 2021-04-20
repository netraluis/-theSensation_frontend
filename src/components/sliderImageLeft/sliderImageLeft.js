import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "./sliderImageLeft.css";
import Button from "../../components/button/button";
import React, { useState } from "react";

/*
[{
  url,
  alt,
  text,
  button
}]
*/
const SliderImageLeft = (props) => {
  let host = `${window.location.protocol}//${window.location.host}/`;
  const { array, title, button, hide, addExtra } = props;
  const [show, setShow] = useState(false);
  // if(hide){
  //   setShow(true)
  // }
  const click = (name, price) => {
    console.log({name, price})
    addExtra(name, price)
  }
  return (
    <div className="sliderLeft-outside">
      <div className="sliderLeft">
        <h3>
          {hide && !show && [<div onClick={() => setShow(!show)}>&#9658;</div>]}
          {hide && show && [<div onClick={() => setShow(!show)}>&#9660;</div>]}
          {title}
        </h3>
        {(!hide || show) && [
          <AwesomeSlider>
            {array.map((imageObject, index) => (
              <div key={index} className="sliderLeft-container">
                <div className="sliderLeft-image">
                  <img
                    style={image}
                    src={`${host}static/images/${imageObject.url}`}
                    alt={imageObject.alt}
                  />
                </div>
                <div key={imageObject.alt} className="sliderLeft-text">
                  <h3>{imageObject.subtitle}</h3>
                  <p>{imageObject.text}</p>
                  <div>
                    <div>{imageObject.price}</div>
                    {button && [<Button onClick={()=>{click(imageObject.subtitle, imageObject.price)}} >RESERVAR</Button>]}
                  </div>
                </div>
              </div>
            ))}
          </AwesomeSlider>,
        ]}
      </div>
    </div>
  );
};

export default SliderImageLeft;

const image = {
  width: "100%",
};
