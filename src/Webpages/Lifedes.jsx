import React from "react";
import Navbar from "/sections/Navbar";
import HeadingDesc from "/sections/PageLayout/HeadingDesc";
import InfoBanner from "/sections/PageLayout/InfoBanner";
import Return from "/components/Buttons/Return";

function Lifedes() {
  return (
    <div>
      <Navbar />
      <Return />
      <InfoBanner
        title="Lifedes"
        productType="Design"
        productRole="UX/UI Designer"
        productDuration="1 Week"
        description="Designing a modern, responsive fashion and lifestyle digital publication that provides an engaging, editorial-style reading experience for users on both web and mobile platforms."
        image="/assets/Images/Lifedes/Lifedes_cover.png"
      />
      <HeadingDesc
        title="Project Objectives"
        paragraph="This project aims to design a responsive fashion and lifestyle digital publication that reflects current trends through bold visuals, clean layouts, and editorial-style storytelling. The goal is to create an engaging, mobile-friendly experience that blends aesthetic appeal with intuitive navigation, accessible design, and flexible content modules—bringing the look and feel of a modern fashion magazine into the digital space."
      />
      <HeadingDesc
        title="Problem Statement"
        paragraph="Fashion and lifestyle readers, especially mobile-first users, struggle to find digital publications that balance bold, trend-driven visuals with clean, intuitive design. Current platforms often feel cluttered, outdated, and lack responsiveness—leading to a disjointed and unsatisfying user experience."
      />
      <HeadingDesc
        title="The Solution"
        paragraph="To solve this, I designed a responsive digital publication that blends sleek, modern visuals with clean, intuitive layouts. The goal was to create a seamless experience across all devices, ensuring users could enjoy stylish, engaging content without feeling overwhelmed. "
      />
    </div>
  );
}

export default Lifedes;
