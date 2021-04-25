import "./imageButton.css";
import {Link} from "react-router-dom";

const ImageButton = ({
  array
}) => (
  <div className="image-button-container">
    {array.map((image) => {
      return (
        <Link
          to={`/services`}
          className="menu-item"
        >
          
          <img
            className="imageStyle"
            style={imageStyle}
            src={`${image.imageUrl}`}
            alt={`${image.title}`}
          />
          <div className="content">
            <h1 className="title">{image.title.toUpperCase()}</h1>
          </div>
        </Link>
      );
    })}
  </div>
);

export default ImageButton;

const imageStyle = {
  width: "100wh",
  minWidth: "100%",
  // maxWidth: "120%",
};
