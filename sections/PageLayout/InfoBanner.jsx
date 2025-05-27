import React from "react";

function InfoBanner({
  title,
  productType,
  productRole,
  productDuration,
  description,
  description2,
  image,
  videoSrc,
  alt,
}) {
  return (
    <div className="grid grid-cols-1 gap-y-10 px-[2%] my-10">
      <div className="flex justify-center">
        <h1 className="text-6xl">{title}</h1>
      </div>
      <div className="flex justify-center flex-wrap text-center md:px-0 lg:px-90 text-lg/6 ">
        <div className="flex basis-1/3 justify-center">
          <div>
            <strong>TYPE</strong>
            <br />
            <span className="pt-2 block">{productType}</span>
          </div>
        </div>
        <div className="flex basis-1/3 justify-center">
          <div>
            <strong>ROLE</strong>
            <br />
            <span className="pt-2 block">{productRole}</span>
          </div>
        </div>
        <div className="flex basis-1/3 justify-center">
          <div>
            <strong>DURATION</strong>
            <br />
            <span className="pt-2 block">{productDuration}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:px-0 lg:px-40 text-lg/6">
        <p className="text-center">
          {description}
          <br />
          <br />
          {description2}
        </p>
      </div>
      <div className="flex justify-center">
        <img src={image} alt={alt} className="max-w-full h-auto" />
        {videoSrc && (
          <div className="w-full aspect-video">
            <iframe
              src={videoSrc}
              title="Video"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}

export default InfoBanner;
