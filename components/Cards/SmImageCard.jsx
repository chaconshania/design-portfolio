import React from "react";

function SmImageCard({ imageUrl, link, alt }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block transform transition duration-300 w-full h-full"
    >
      <div className="bg-neutral-100 rounded-lg w-full h-full">
        <img
          src={imageUrl}
          alt={alt}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </a>
  );
}

export default SmImageCard;
