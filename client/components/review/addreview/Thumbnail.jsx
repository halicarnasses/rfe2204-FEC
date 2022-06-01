import React from 'react';


function Thumbnail({image}) {
  console.log(image)
  return (
    <img src={image} />
  );
}
export default Thumbnail;
