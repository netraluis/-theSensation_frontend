import "./imageButton.css";
/*
[
  { title, imageUrl, size, history, match, linkUrl },
]
*/
const ImageButton = ({
  array,
}) => (
  <div className="image-button-container">
    {array.map((image) => {
      return (
        <div
          className="menu-item"
          onClick={() => {
            // console.log('histoy',history,'match',match)
            // return history.push(`${match.url}${linkUrl}`);
          }}
        >
          
          <img
            className="imageStyle"
            style={imageStyle}
            src={`${image.imageUrl}`}
            alt=""
          />
          <div className="content">
            <h1 className="title">{image.title.toUpperCase()}</h1>
          </div>
        </div>
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
