import React from "react";

function InfoBanner({
  title,
  productType,
  productRole,
  productDuration,
  description,
  description2,
  image,
  alt,
}) {
  return (
    <div className="grid grid-cols-1 gap-y-20 px-10 lg:px-20  my-10">
      <div className="flex justify-center">
        <h1 className="text-6xl">{title}</h1>
      </div>
      <div className="flex justify-center">
        <img src={image} alt={alt} className="max-w-full h-auto" />
      </div>
      <div className="flex justify-center flex-wrap text-center md:px-0 lg:px-40 text-lg/6">
        <div className="flex basis-1/3 justify-center">
          <div>
            <strong>TYPE</strong>
            <br />
            {productType}
          </div>
        </div>
        <div className="flex basis-1/3 justify-center">
          <div>
            <strong>ROLE</strong>
            <br />
            {productRole}
          </div>
        </div>
        <div className="flex basis-1/3 justify-center">
          <div>
            <strong>DURATION</strong>
            <br />
            {productDuration}
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
    </div>
  );
}

export default InfoBanner;
