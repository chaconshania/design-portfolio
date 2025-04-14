import React from "react";
import Navbar from "/sections/Navbar";
import HeadingDesc from "/sections/PageLayout/HeadingDesc";

function About() {
  return (
    <div>
      <Navbar />
      <HeadingDesc
        title="Product Designer"
        paragraph="Currently pursuing her Bachelor of Fine Arts in Digital Media and Design, she specializes in crafting user-centric web and interactive media experiences that seamlessly blend simplicity with functionality. With an eye for detail and a strong belief that great design should be both elegant and intuitive, Shania’s work reflects a balance between aesthetics and usability. She draws inspiration from contemporary digital tools and timeless design principles, ensuring her creations are not only visually appealing but also highly effective."
      />
    </div>
  );
}

export default About;
