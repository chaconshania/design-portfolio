import React from "react";
import Title from "/sections/PageLayout/Title";
import Navbar from "/sections/Navbar";
import HeadingDesc from "/sections/PageLayout/HeadingDesc";

function FitMix() {
  return (
    <div>
      <Navbar />
      <HeadingDesc
        title="Snap photos of your clothes or find fresh outfit inspiration to make the most of every piece in your closet."
        paragraph="something"
      />
    </div>
  );
}

export default FitMix;
