import React from "react";
import Navbar from "/sections/Navbar";
import HeadingDesc from "/sections/PageLayout/HeadingDesc";
import InfoBanner from "/sections/PageLayout/InfoBanner";
import Return from "/components/Buttons/Return";
import Footer from "/sections/Footer";
function FitMix() {
  return (
    <div>
      <Navbar />
      <Return />
      <InfoBanner
        title="FITMIX"
        productType="Design"
        productRole="UX/UI Designer"
        productDuration="1 Week"
        description="Many people struggle to make the most of their wardrobe, often overlooking pieces they already own. With Fitmix, I set out to simplify this process by creating a mobile app prototype that lets users snap photos of their clothes and get fresh outfit inspiration—right from their closet."
        description2="This design challenge was completed as part of my UI Design course, where I focused on building a high-fidelity, interactive prototype. The goal was to create a visually engaging and user-friendly experience that encourages personal style exploration and more intentional fashion choices."
        image="/assets/Images/FitMix/FitMix_cover.jpg"
      />

      <Footer />
    </div>
  );
}

export default FitMix;
