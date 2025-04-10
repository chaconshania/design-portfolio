import React from "react";
import SmVideoCard from "/components/Cards/SmVideoCard";
import LgVideoCard from "/components/Cards/LgVideoCard";
import SmImageCard from "/components/Cards/SmImageCard";
import { motion } from "motion/react";

function LayoutGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 m-4">
      <div className="bg-neutral-100 lg:row-span-2 rounded-lg min-h-full">
        <SmVideoCard
          videoSrc="/assets/Videos/Lifedes_mockup.mp4"
          link=""
          alt="Local Video"
        />
      </div>
      <div className="bg-neutral-100 lg:row-span-3 rounded-lg h-full">
        <LgVideoCard
          videoSrc="/assets/Videos/OasisXR_demo.mov"
          link="https://oasisxr.framer.website/"
          alt="Oasis Video"
        />
      </div>
      <div className="bg-neutral-100 lg:row-span-2 rounded-lg h-full ">
        <SmVideoCard
          videoSrc="/assets/Videos/DMD_Exhibition.mp4"
          link=""
          alt="Local Video"
        />
      </div>
      <div className="bg-neutral-100 lg:row-span-2 lg:row-start-3 rounded-lg h-full">
        <SmVideoCard
          videoSrc="/assets/Videos/FitMix_mockup.mp4"
          link=""
          alt="Local Video"
        />
      </div>
      <div className="bg-neutral-100 lg:row-span-3 lg:col-start-2 lg:row-start-4 rounded-lg h-full">
        <LgVideoCard
          videoSrc="/assets/Videos/AOTR.mp4"
          link=""
          alt="Local Video"
        />
      </div>
      <div className="bg-neutral-100 lg:row-span-2 lg:col-start-3 lg:row-start-3 rounded-lg">
        <SmVideoCard
          videoSrc="/assets/Videos/Dreamscape_mockup.mp4"
          link=""
          alt="Local Video"
        />
      </div>
      <div className="bg-neutral-100 lg:row-span-2 lg:row-start-5 rounded-lg h-full"></div>
      <div className="bg-neutral-100 lg:row-span-2 lg:col-start-3 lg:row-start-5 rounded-lg"></div>
    </div>
  );
}

export default LayoutGrid;
