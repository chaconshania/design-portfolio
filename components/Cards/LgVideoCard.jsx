import React from "react";

function LgVideoCard({ imageUrl, videoSrc, alt }) {
  return (
    <div className="bg-neutral-100 rounded-lg w-full h-full">
      {videoSrc ? (
        <video
          autoPlay
          loop
          muted
          playsInline
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

export default LgVideoCard;
