import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "./smallSliderWithText.css";
import Button from '../../components/button/button'
// '.'

/*
[{
  url,
  alt,
  text,
  button
}]
*/
const SliderImageLeftText = (props) => {
  const { array, title, text, price } = props;
  console.log(__dirname)
  return (
    <div className="sliderLeftText-outside">
      <div className="sliderLeftText">
        <div className="sliderLeftText-container">
          <AwesomeSlider>
            {array.map((imageObject) => (
              <div key={imageObject.url} className="sliderLeftText-image">
                <img
                  style={image}
                  src={`static/images/${imageObject.url}`}
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
            <div>{price}</div><Button>RESERVAR</Button>
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
