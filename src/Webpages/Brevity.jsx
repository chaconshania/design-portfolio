import React from "react";
import Navbar from "/sections/Navbar";
import HeadingDesc from "/sections/PageLayout/HeadingDesc";
import InfoBanner from "/sections/PageLayout/InfoBanner";

function Brevity() {
  return (
    <div>
      <Navbar />
      <InfoBanner
        title="Brevity"
        productType="Website Design"
        productRole="Web Designer & Developer"
        productDuration="3 Week"
        description="Brevity is a web-based platform designed to showcase the work of Digital Media & Design students at the University of Connecticut. Created in collaboration with a team of designers and developers, the site serves a dual purpose: to spotlight individual student projects through dedicated pages, and to provide visitors with key information about the exhibition itself."
        image="/assets/Images/Brevity/DMD-Exhibtion.gif"
      />
      <HeadingDesc
        title="My Role"
        paragraph="My role in this project involved contributing to the overall user experience and visual design. I created both low- and high-fidelity wireframes, developed interactive mockups, and helped shape the site’s information architecture by designing the sitemap and integrating intuitive interactions. The final product is a clean, responsive website that highlights student work while offering a seamless browsing experience for attendees and online viewers alike."
      />
      <HeadingDesc
        title="The Process"
        paragraph="From the start, our goal was to merge the visual branding created by the design team with a functional and engaging site experience that would showcase UConn’s Digital Media & Design student projects."
        paragraph2="We began with moodboards and information architecture, gradually moving through low, mid, and high-fidelity prototypes. While the design team developed the brand identity, we worked in parallel on the site structure and layout, staying in constant communication to ensure visual consistency. We also engaged with the students—our core users—to gather input and test early designs, helping us understand what resonated and what needed refinement."
      />
    </div>
  );
}

export default Brevity;
