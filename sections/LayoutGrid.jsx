import React from "react";
import SmVideoCard from "/components/Cards/SmVideoCard";
import LgVideoCard from "/components/Cards/LgVideoCard";
import SmImageCard from "/components/Cards/SmImageCard";
import { motion } from "motion/react";
import { Link } from "react-router";

function LayoutGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 m-4">
      <div className="group relative bg-neutral-100 lg:row-span-2 rounded-lg min-h-full overflow-hidden">
        <Link to="/lifedes">
          <SmVideoCard
            videoSrc="/assets/Videos/Lifedes_mockup.mp4"
            link=""
            alt="Local Video"
            src="/public/assets/Gifs/Lifedes.gif"
          />
        </Link>
        <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-black text-white text-sm px-4 py-2 rounded">
            Lifedes, UX/UI
          </span>
          <span className="bg-black text-white text-sm px-4 py-2 rounded">
            Prototype
          </span>
        </div>
      </div>
      <div className="group relative bg-neutral-100 lg:row-span-3 rounded-lg h-full">
        <Link to="/oasisxr">
          <LgVideoCard
            videoSrc="/assets/Videos/OasisXR_demo.mov"
            link="https://oasisxr.framer.website/"
            alt="Oasis Video"
          />
        </Link>
        <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-white text-black text-sm px-4 py-2 rounded">
            Oasis, Extended Reality Prototype
          </span>
          <span className="bg-white text-black text-sm px-4 py-2 rounded">
            UX/UI
          </span>
        </div>
      </div>
      <div className="group relative bg-neutral-100 lg:row-span-2 rounded-lg h-full ">
        <Link to="/brevity">
          <SmVideoCard
            videoSrc="/assets/Videos/DMD_Exhibition.mp4"
            alt="Local Video"
          />
        </Link>
        <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-black text-white text-sm px-4 py-2 rounded">
            Brevity, Web Design
          </span>
          <span className="bg-black text-white text-sm px-4 py-2 rounded">
            UCONN Project
          </span>
        </div>
      </div>
      <div className="group relative bg-neutral-100 lg:row-span-2 lg:row-start-3 rounded-lg h-full">
        <Link to="/fitmix">
          <SmVideoCard
            videoSrc="/assets/Videos/FitMix_mockup.mp4"
            alt="Local Video"
          />
        </Link>
        <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-black text-white text-sm px-4 py-2 rounded">
            FitMix, UX/UI
          </span>
          <span className="bg-black text-white text-sm px-4 py-2 rounded">
            Prototype
          </span>
        </div>
      </div>
      <div className="group relative bg-neutral-100 lg:row-span-3 lg:col-start-2 lg:row-start-4 rounded-lg h-full">
        <Link to="" className="cursor-not-allowed">
          <LgVideoCard
            videoSrc="/assets/Videos/AOTR.mp4"
            link=""
            alt="Local Video"
          />
        </Link>
        <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-black text-white text-sm px-4 py-2 rounded">
            Art of the Roll
          </span>
          <span className="bg-black text-white text-sm px-4 py-2 rounded">
            Product Design
          </span>
        </div>
      </div>
      <div className="group relative bg-neutral-100 lg:row-span-2 lg:col-start-3 lg:row-start-3 rounded-lg ">
        <Link to="" className="cursor-not-allowed">
          <SmVideoCard
            videoSrc="/assets/Videos/Dreamscape_mockup.mp4"
            alt="Local Video"
          />
        </Link>
        <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-black text-white text-sm px-4 py-2 rounded">
            DreamScape, Web Design
          </span>
          <span className="bg-black text-white text-sm px-4 py-2 rounded">
            Three.js
          </span>
        </div>
      </div>
      <div className="lg:row-span-2 lg:row-start-5 rounded-lg h-full"></div>
      <div className="lg:row-span-2 lg:col-start-3 lg:row-start-5 rounded-lg"></div>
    </div>
  );
}

export default LayoutGrid;
