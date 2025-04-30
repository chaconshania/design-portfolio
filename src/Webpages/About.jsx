import React from "react";
import Navbar from "/sections/Navbar";
import HeadingDesc from "/sections/PageLayout/HeadingDesc";

function About() {
  return (
    <div>
      <Navbar />
      <HeadingDesc 
        title="Product Designer"
        paragraph="I'm currently working toward my Bachelor of Fine Arts in Digital Media and Design, focusing on creating user-centered web and interactive experiences that are both simple and functional. I’ve always believed that good design should feel effortless—clean, intuitive, and thoughtful. I love paying attention to the little details that make a big difference, and I’m constantly inspired by a mix of modern digital tools and classic design principles. My goal is to make things that not only look great but work great too."
        paragraph2="I started my UX/UI journey in college while searching for a way to combine my love for design and coding. Since then, it’s been quite the ride—from interning and working at ArtsWestchester to taking on freelance projects. Each step has taught me something new and helped me grow not just as a designer, but as a creative problem-solver."
      />
    </div>
  );
}

export default About;
