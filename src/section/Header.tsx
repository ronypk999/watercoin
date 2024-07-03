import React from "react";
import Marquee from "react-fast-marquee";
import favicon from "../assets/favicon.ico";
import logo from "../assets/logo.webp";
import { useRef, useState } from "react";

import bg from "../assets/bg.png";
import menu from "../assets/menu.svg";
import menuClose from "../assets/menu-close.svg";

const Header: React.FC = () => {
  const [hide, setHide] = useState(true);
  const [hide2, setHide2] = useState(true);

  const stickyElement = useRef<HTMLDivElement>(null);

  const menuHandle = () => {
    if (hide) {
      document.body.style.overflow = "hidden";
      setHide2(!hide);
      setTimeout(() => {
        setHide(!hide);
      }, 100);
    } else {
      document.body.style.overflow = "";
      setHide(!hide);

      setHide2(!hide);
    }
  };
  return (
    <>
      <div>
        <Marquee autoFill={true} className="py-6 bg-[#2a4c75]">
          <span className="mr-3 uppercase font-bold text-white">Rehydrate</span>
          <img src={favicon} className="w-4" />
        </Marquee>
      </div>
      <div className="max-w-[1600px] mx-auto px-6">
        <div
          ref={stickyElement}
          className="sticky top-0 mb-[-100px] flex items-center gap-12
     z-10 nav shadow-lg bg-white py-6 rounded-[20px] text-[#2a4c75] md:text-black md:px-6"
        >
          <div className="flex px-3 justify-between items-center w-full md:w-fit">
            <div className="">
              <img src={logo} className="w-48" />
            </div>
            <div className="md:hidden">
              <div onClick={menuHandle} className="text-3xl">
                <img src={menu} />
              </div>
            </div>
          </div>
          <div
            className={`${hide ? "-right-[100rem]" : "-right-6"} ${
              hide2 && "hidden"
            } absolute h-screen w-screen nav md:h-fit p-3 space-y-12 md:space-y-0 md:p-0 top-0 bottom-0 md:static md:flex items-center w-full justify-around lg:justify-between lg:px-6 font-medium bg-md-none`}
            onClick={(e) => {
              e.stopPropagation();
            }}
            style={{
              backgroundImage: `url(${bg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="md:hidden">
              <div onClick={menuHandle} className="text-3xl flex justify-end">
                <img src={menuClose} />
              </div>
            </div>
            <div className="hidden md:flex flex-col md:flex-row items-start text-2xl gap-6">
              <button className="uppercase" onClick={() => {}}>
                Features
              </button>
              <button className="uppercase" onClick={() => {}}>
                Utility
              </button>
              <button className="uppercase" onClick={() => {}}>
                Roadmap
              </button>
              <button className="uppercase" onClick={() => {}}>
                Faq
              </button>
            </div>
            <div className="md:hidden flex flex-col md:flex-row items-start text-2xl gap-6 uppercase">
              <button
                className="uppercase"
                onClick={() => {
                  menuHandle();
                }}
              >
                Features
              </button>
              <button
                className="uppercase"
                onClick={() => {
                  menuHandle();
                }}
              >
                Utility
              </button>
              <button
                className="uppercase"
                onClick={() => {
                  menuHandle();
                }}
              >
                Roadmap
              </button>
              <button
                className="uppercase"
                onClick={() => {
                  menuHandle();
                }}
              >
                Faq
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <button
                onClick={() => {}}
                className="hidden bg-[#f96d6d] md:block btn text-base px-12 border-2 border-black rounded-lg text-xl text-white py-2 uppercase"
              >
                Pre-sale
              </button>
              <button
                onClick={() => {
                  menuHandle();
                }}
                className="md:hidden bg-green-600 btn text-base px-12 border-2 border-black rounded-lg text-xl text-white py-2 uppercase"
              >
                Pre-sale
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
