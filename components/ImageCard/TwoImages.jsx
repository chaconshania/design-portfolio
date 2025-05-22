import React from "react";

function TwoImages(image1, image2) {
  return (
    <div className="grid grid-cols-2 gap-2 px-[2%]">
      <div className="w-full object-cover flex justify-center">
        <img src={image1}></img>
      </div>
      <div className="w-full object-cover flex justify-center">
        <img src={image2}></img>
      </div>
    </div>
  );
}

export default TwoImages;
