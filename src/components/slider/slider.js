import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './slider.css'

/*
[{
  url,
  alt,
  text,
  button
}]
*/
const slider = (props) =>{
  const {array} = props
  console.log(array.length>0)
  return (
    <AwesomeSlider>
      {array.map(imageObject=>(
        <div key={imageObject.text} className = 'slider-container'>
          <img className = 'slider-cover img' style={image}  src={`static/images/${imageObject.url}`} alt=''/>
          <div className = 'slider-text'>{imageObject.text}</div>
        </div>
      ))}
    </AwesomeSlider>
  );
} 

export default slider

const image = {
  width: '100wh',
  minWidth: '90%',
  maxWidth: '120%'
}
