import React from "react";
import Navbar from "/sections/Navbar.jsx";
import Return from "/components/Buttons/Return";
import InfoBanner from "/sections/PageLayout/InfoBanner";
import HeadingDesc from "/sections/PageLayout/HeadingDesc";
import Footer from "/sections/Footer";
import FullImage from "/components/ImageCard/FullImage";
function OasisXr() {
  return (
    <div>
      <Navbar />
      <Return />
      <InfoBanner
        title="Oasis XR"
        productType="Design"
        productRole="UX/UI Designer"
        productDuration="4 Months"
        description="Oasis XR is an immersive experience where users get to connect and play calming, mindfulness activities, mediated through a VR headset."
        videoSrc="/public/assets/Videos/Shania_Chacon_OasisXR.mp4"
      />
      <HeadingDesc
        title="Background"
        paragraph="For my senior capstone project at UConn, I decided to focus on how XR can be used to enhance mental health, specifically addressing anxiety and stress. While mindfulness apps like Headspace and Endel have begun to incorporate XR elements, there’s still much to explore in terms of creating more interactive and accessible experiences.
        With this project, I aim to research how XR can offer more immersive mental health support, helping users better manage their emotions and improve their overall well-being. My goal is to design solutions that make mindfulness more engaging and easily integrated into daily life, providing real relief for those struggling with mental health challenges."
      />
      <HeadingDesc
        title="My Role"
        paragraph="As the lead researcher and designer, my role is to explore how XR technology can enhance mental health solutions. I will be conducting user research, analyzing existing XR apps like Headspace and Endel, and designing user-centered experiences to address the needs of people struggling with anxiety and stress. My responsibilities include developing user personas, creating XR prototypes through Bezi, and testing solutions to ensure that the final product is effective, engaging, and accessible to users."
      />
      <FullImage image="/assets/Images/FitMix/FitMix_cover.jpg" />
      <HeadingDesc
        title="The Problem"
        paragraph="Many traditional and XR mindfulness apps struggle to keep users engaged and fail to address the unique challenges of managing anxiety and stress effectively. High costs, lack of accessibility, limited personalization, and a failure to create immersive, interactive experiences often leave users feeling disconnected and unmotivated."
      />
      <Footer />
    </div>
  );
}

export default OasisXr;
