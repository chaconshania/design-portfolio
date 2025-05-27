import React from "react";

function Title({ heading, subtitle, description }) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 m-4 ">
        <div className="md:h-30 h-25 flex items-start justify-center flex-col">
          <h1 className=" text-black rounded-lg text-6xl">{heading}</h1>
          <p>{subtitle}</p>
        </div>
        <div className="">
          <p>{}</p>
        </div>
        <div className="w-full text-black md:ps-2 rounded-lg flex  items-center justify-center text-lg/7 ">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Title;
