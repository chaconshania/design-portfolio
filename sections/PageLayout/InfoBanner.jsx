import React from "react";

function InfoBanner({
  title,
  productType,
  productRole,
  productDuration,
  description,
  description2,
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-rows-3 grid-rows-1 gap-4 px-10 lg:px-20 gap-y-10 lg:gap-y-1 my-20">
      <div className="flex justify-center">
        <h1 className="text-6xl">{title}</h1>
      </div>
      <div className="flex justify-center md:px-0 lg:px-40">
        <div className="flex basis-1/4 lg:basis-1/3 justify-center text-center ">
          TYPE
          <br />
          {productType}
        </div>
        <div className="flex basis-1/4 lg:basis-1/3 justify-center text-center">
          ROLE
          <br />
          {productRole}
        </div>
        <div className="flex basis-1/4 lg:basis-1/3 justify-center text-center">
          DURATION
          <br />
          {productDuration}
        </div>
      </div>
      <div className="flex justify-center md:px-0 lg:px-40">
        <p>
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
