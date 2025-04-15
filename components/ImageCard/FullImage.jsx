import React from "react";

function FullImage({ image, alt }) {
  return (
    <div className="w-full  object-cover flex justify-center">
      <img src={image} alt={alt} />
    </div>
  );
}

export default FullImage;
