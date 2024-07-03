import React from "react";

import desk from "../assets/banner/bg-desk.png";
import title from "../assets/banner/title-img.webp";
import glass from "../assets/banner/glass.webp";
import badge from "../assets/banner/badge.svg";

const Banner: React.FC = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${desk})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="pt-32 pb-12 relative"
      >
        <div className="max-w-5xl mx-auto pt-16 pb-12">
          <img src={title} className="w-full px-3" />
          <img src={glass} className="mx-auto md:-mt-32 md:pt-0 pt-24 px-12" />
        </div>
        <img src={badge} className="absolute left-3 -bottom-12" />
      </div>
    </>
  );
};

export default Banner;
