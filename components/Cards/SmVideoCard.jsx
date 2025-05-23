import React from "react";

function SmVideoCard({ imageUrl, videoSrc, alt }) {
  return (
    <div className="bg-neutral-100 rounded-lg  w-full h-full">
      {videoSrc ? (
        <video
          autoPlay
          playsInline
          loop
          muted
          className="w-full h-full object-cover rounded-lg"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src={imageUrl}
          alt={alt}
          className="w-full h-full object-cover rounded-lg"
        />
      )}
    </div>
  );
}

export default SmVideoCard;
