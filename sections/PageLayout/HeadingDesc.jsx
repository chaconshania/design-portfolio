import React from "react";

function HeadingDesc({ title, paragraph, paragraph2 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:grid-rows-1 gap-4 m-4 flex-wrap">
      <div className="lg:col-span-1">
        <h1 className="text-black rounded-lg text-4xl">{title}</h1>
      </div>
      <div className="lg:col-start-2">
        <p className="text-lg/6">{paragraph}</p>
      </div>
    </div>
  );
}

export default HeadingDesc;
