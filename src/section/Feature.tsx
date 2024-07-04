import React from "react";
import itemBg from "../assets/item-bg.png";
import left from "../assets/left-title-icon.svg";
import right from "../assets/right-title-icon.svg";

import charity from "../assets/feature/5.webp";
import charity1 from "../assets/feature/1.svg";
import charity2 from "../assets/feature/2.svg";
import charity3 from "../assets/feature/3.svg";
import charity4 from "../assets/feature/4.svg";

const Feature: React.FC = () => {
  return (
    <>
      <div className="p-12 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:mb-12 lg:-mb-12">
          <p
            style={{
              backgroundImage: `url(${itemBg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="shadow-feature rotate-12 w-fit py-4 px-6 rounded-full"
          >
            You Drink it everyday
          </p>
          <p
            style={{
              backgroundImage: `url(${itemBg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="shadow-feature -rotate-12 w-fit py-3 text-center px-6 rounded-full"
          >
            Is the vital component of life
            <br /> in our universe
          </p>
        </div>
        <div className="py-12 md:py-0 space-y-3 relative z-1">
          <div className="flex justify-center gap-3">
            <img src={left} className="w-12 md:w-16" />
            <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-center">
              <h1 className="text-[#2A4C75]">Key Features:</h1>
              <h1 className="text-[#58b7e7]">$WaterCoin</h1>
            </div>
            <img src={right} className="w-12 md:w-16" />
          </div>
          <p className="text-[#2A4C75] max-w-lg text-center mx-auto">
            Our goal is to create the cleanest and most ethical platform in the
            crypto space, treating our community with fairness and transparency.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 lg:-mt-24">
          <div className="flex flex-col-reverse md:flex-col gap-12">
            <p
              style={{
                backgroundImage: `url(${itemBg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="shadow-feature -rotate-3 w-fit py-4 px-6 rounded-full"
            >
              Scarce, same as Bitcoin
            </p>
            <p
              style={{
                backgroundImage: `url(${itemBg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="shadow-feature -rotate-6 w-fit py-4 px-6 rounded-full"
            >
              Tastes great when you are thirsty
            </p>
          </div>
          <div>
            <p
              style={{
                backgroundImage: `url(${itemBg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="shadow-feature rotate-3 w-fit py-3 text-center px-6 rounded-full"
            >
              You definitely need some WATER <br /> after you had too much
              alcohol
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 px-3 py-12">
        <div className="card shadow-feature-card-blue border-2 border-[#58b7e7]">
          <figure className="p-6">
            <img src={charity} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title text-[#58b7e7] uppercase font-bold">
              Charity FIRST
            </h2>
            <p>
              Global charity and research initiatives that will drive attention
              of millions of people. $WATER aims to have a net-positive impact
              on real world with the help of charity.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="card shadow-feature-card-green border-2 border-[#57bb7a]">
            <figure className="p-6 !justify-start">
              <img src={charity1} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body p-6">
              <h2 className="card-title text-[#57bb7a] uppercase font-bold">
                Charity FIRST
              </h2>
              <p>
                Global charity and research initiatives that will drive
                attention of millions of people. $WATER aims to have a
                net-positive impact on real world with the help of charity.
              </p>
            </div>
          </div>
          <div className="card shadow-feature-card-1 border-2 border-[#58b7e7]">
            <figure className="p-6 !justify-start">
              <img src={charity2} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body p-6">
              <h2 className="card-title text-[#58b7e7] uppercase font-bold">
                Charity FIRST
              </h2>
              <p>
                Global charity and research initiatives that will drive
                attention of millions of people. $WATER aims to have a
                net-positive impact on real world with the help of charity.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="card shadow-feature-card-beguni border-2 border-[#bf8dff]">
            <figure className="p-6 !justify-start">
              <img src={charity3} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body p-6">
              <h2 className="card-title text-[#bf8dff] uppercase font-bold">
                Charity FIRST
              </h2>
              <p>
                Global charity and research initiatives that will drive
                attention of millions of people. $WATER aims to have a
                net-positive impact on real world with the help of charity.
              </p>
            </div>
          </div>
          <div className="card shadow-feature-card-komla border-2 border-[#f79422]">
            <figure className="p-6 !justify-start">
              <img src={charity4} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body p-6">
              <h2 className="card-title text-[#f79422] uppercase font-bold">
                Charity FIRST
              </h2>
              <p>
                Global charity and research initiatives that will drive
                attention of millions of people. $WATER aims to have a
                net-positive impact on real world with the help of charity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
