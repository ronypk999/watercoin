import React from "react";
import roadDesk from "../assets/RoadNomics/desk-en.png";
import roadMob from "../assets/RoadNomics/mob-en.png";
import nomDesk from "../assets/RoadNomics/bg-en.png";
import nomMob from "../assets/RoadNomics/bg-mob-en.png";
import bg from "../assets/RoadNomics/bg-block.webp";
import drop from "../assets/RoadNomics/percentage-en.webp";
const RoadNomics: React.FC = () => {
  return (
    <>
      <div className="py-12 space-y-12">
        <img src={roadMob} className="w-full md:hidden" />
        <img src={roadDesk} className="w-full hidden md:block" />
        <img src={nomMob} className="w-full md:hidden" />
        <img src={nomDesk} className="w-full hidden md:block" />
      </div>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="relative min-h-[25.5rem] rounded-box"
      >
        <h1 className="mx-auto md:mx-0 py-6 md:pt-32 md:pl-12 breakdown-text-shadow text-2xl md:text-6xl lg:text-7xl text-white font-black max-w-64">
          Presale Breakdown
        </h1>
        <img
          src={drop}
          className="absolute w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0   md:right-12 -bottom-24 md:bottom-auto md:-top-12"
        />
      </div>
    </>
  );
};

export default RoadNomics;
