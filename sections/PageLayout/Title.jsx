import React from "react";

function Title({}) {
  return (
    <section className="px-2 md:px-2 py-2">
      <div className="m-4 ">
        {/* Project Overview */}
        <div className="grid grid-cols-12 gap-8 mb-10">
          <div className="col-span-12">
            <h1 className="text-6xl font-light mb-6 bold">Hi, I'm Shania!</h1>
            <p className="text-lg/6 leading-relaxed mb-4">
              Designing, building, and envisioning a world that's intuitive,
              inspiring, and just a touch magical. <br /> Currently working as a
              Product Designer Intern @ Blueberry.Social!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Title;
