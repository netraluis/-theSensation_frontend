import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './sliderImageLeft.css'


/*
[{
  url,
  alt,
  text,
  button
}]
*/
const SliderImageLeft = (props) =>{
  const {array,title} = props
  console.log(array.length>0)
  return (
      <div className='sliderLeft'>
       <h3>{title}</h3>
        <AwesomeSlider>
            {array.map(imageObject=>(
            <div className = 'sliderLeft-container'>
            <div className = 'sliderLeft-image'>
                <img style={image}  src={`static/images/${imageObject.url}`} alt=''/>
            </div>
                <div className = 'sliderLeft-text'>
                <h3>
                {imageObject.subtitle}
                </h3>
                <p>{imageObject.text}</p>
                <button>{imageObject.price}</button>
                </div>
            </div>
            ))}
        </AwesomeSlider>
      </div>
  );
} 

export default SliderImageLeft

const image = {
  width: '100%',

}