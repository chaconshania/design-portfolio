import React from "react";

function HeadingDesc({ title, paragraph }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 lg:grid-rows-1 gap-4 m-4 flex-wrap">
      <div className="lg:col-span-2">
        <h1 className="text-black rounded-lg text-6xl">{title}</h1>
      </div>
      <div className="lg:col-start-3">
        <p className="text-lg/7">{paragraph}</p>
      </div>
    </div>
  );
}

export default HeadingDesc;
