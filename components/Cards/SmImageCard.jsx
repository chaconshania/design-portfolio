import React from "react";

function SmImageCard({ imageUrl, alt }) {
  return (
    <div className="bg-neutral-100 rounded-lg w-full h-full">
      <img
        src={imageUrl}
        alt={alt}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
}

export default SmImageCard;
