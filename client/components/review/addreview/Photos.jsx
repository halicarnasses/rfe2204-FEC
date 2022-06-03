import React, {useState} from 'react';
import Thumbnail from './Thumbnail.jsx';

function Photos() {
  let insertedImage = '';
  const [images, addImage] = useState([]);
  function handleChange(e) {
    e.preventDefault(e);
    const selctedImage = e.target.files[0];
    insertedImage = selctedImage;
  }
  function handleClick(e) {
    e.preventDefault(e);
    insertedImage ==! '' && addImage([...images, insertedImage]);
    // Also, test if image doesnt exist
  }

  return (
  <div>
      <h3>Insert your photo</h3>
      <input onChange={handleChange} type="file" id="img" name="photo" accept="image/*" />
      <input onClick={handleClick} type="submit" />
      {images.length > 0 && images.map((image, index) => <Thumbnail key={image} image={image} />)}
  </div>
  );
}
export default Photos;