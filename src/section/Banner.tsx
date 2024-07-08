import React from "react";

import desk from "../assets/banner/bg-desk.png";
import title from "../assets/banner/main_title.png";
import glass from "../assets/banner/juice_glass.png";
// import sol from "../assets/solana.png";
// import badge from "../assets/banner/badge.svg";

const Banner: React.FC = () => {
  // const [copySuccess, setCopySuccess] = useState<string>("Copy");
  // const [copyText] = useState<string>(
  //   "B6h248NJkAcBAkaCnji889a26tCiGXGN8cxhEJ4dX391d"
  // );

  // const copyToClipboard = () => {
  //   navigator.clipboard
  //     .writeText(copyText)
  //     .then(() => {
  //       setCopySuccess("Copied!");
  //       setTimeout(() => {
  //         setCopySuccess("Copy");
  //       }, 5000);
  //     })
  //     .catch((err) => {
  //       setCopySuccess("Error!");
  //       console.error("Failed to copy: ", err);
  //     });
  // };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${desk})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="pt-32 relative"
      >
        <div className="max-w-5xl mx-auto pt-16 pb-12">
          <img
            src={title}
            className="w-full max-w-2xl mx-auto px-3"
            alt="Title"
          />
          <img
            src={glass}
            className="mx-auto  md:pt-0 pt-24 px-12"
            alt="Glass"
          />
        </div>
        {/* <img src={badge} className="absolute left-3 -bottom-12" alt="Badge" /> */}
      </div>
      {/* <div className="py-12">
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-6 bg-yellow-500 p-3"
          onClick={copyToClipboard}
        >
          <div className=" md:text-2xl lg:text-4xl flex flex-col md:flex-row items-center justify-center gap-3">
            <span className="text-2xl md:text-4xl flex items-center gap-2 uppercase">
              <img src={sol} className="w-8 md:w-12" /> Contract:
            </span>
            <span className="flex-1 break-all"> {copyText}</span>
          </div>
          <button className="btn text-xl md:text-2xl rounded-full bg-blue-500 px-6 text-white hover:bg-blue-400">
            {copySuccess}
          </button>
        </div>
      </div> */}
    </>
  );
};

export default Banner;
