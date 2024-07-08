import React from "react";
import Marquee from "react-fast-marquee";
import favicon from "/favicon.png";
import logo from "../assets/key.png";
import { useRef, useState } from "react";
import menu from "../assets/menu.svg";
import menuClose from "../assets/menu-close.svg";
import { useInfoContext } from "../hook/ContextHook";

const Header: React.FC = () => {
  const { scrollToFeature, scrollToHealth, scrollToWhitepaper } =
    useInfoContext();
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
      <div className="hidden">
        <Marquee autoFill={true} className="py-6 bg-[#2a4c75]">
          <span className="mr-3 uppercase font-bold text-white">
            VITAMINIZE & ENERGIZE
          </span>
          <img src={favicon} className="w-12" />
        </Marquee>
      </div>

      <div
        ref={stickyElement}
        className="max-w-[1600px] mx-3 lg:mx-auto sticky top-12 mb-[-85px] mt-[-11px] 
     z-10 nav    text-[#2a4c75] md:text-black md:px-6"
      >
        <div className="bg-white py-3 md:py-6 px-3 shadow-nav rounded-[20px] flex items-center gap-12">
          <div className="flex px-3 justify-between items-center w-full md:w-fit">
            <div className="">
              <img src={logo} className="w-40 md:hidden" />
            </div>
            <div className="md:hidden">
              <div onClick={menuHandle} className="text-3xl">
                <img src={menu} />
              </div>
            </div>
          </div>
          <div
            className={`${hide ? "-right-[100rem]" : "-right-3"} ${
              hide2 && "hidden"
            } absolute bg-white h-screen w-screen nav md:h-fit p-3 space-y-12 md:space-y-0 md:p-0 -top-12 bottom-0 md:static md:flex items-center w-full justify-around lg:justify-between lg:px-6 font-medium bg-md-none`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="md:hidden">
              <div onClick={menuHandle} className="text-3xl flex justify-end">
                <img src={menuClose} />
              </div>
            </div>
            <div className="hidden md:flex flex-col md:flex-row items-start text-2xl gap-6 w-full justify-center">
              <button className="uppercase" onClick={scrollToFeature}>
                Features
              </button>
              <button className="uppercase" onClick={scrollToHealth}>
                Healthcare Foundation
              </button>
              {/* <button className="uppercase" onClick={() => {}}>
                Roadmap
              </button> */}
              <button className="uppercase" onClick={scrollToWhitepaper}>
                WhitePaper
              </button>
            </div>
            <div className="md:hidden flex flex-col md:flex-row items-start text-2xl gap-6 uppercase">
              <button
                className="uppercase"
                onClick={() => {
                  menuHandle();
                  scrollToFeature();
                }}
              >
                Features
              </button>
              <button
                className="uppercase"
                onClick={() => {
                  menuHandle();
                  scrollToHealth();
                }}
              >
                Healthcare Foundation
              </button>
              {/* <button
                className="uppercase"
                onClick={() => {
                  navigate("whitepaper");
                }}
              >
                Roadmap
              </button> */}
              <button
                className="uppercase"
                onClick={() => {
                  menuHandle();
                  scrollToWhitepaper();
                }}
              >
                WhitePaper
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <img src={logo} className="w-40 mx-auto" />
              {/* <button
                onClick={() => {}}
                className="hidden bg-[#f96d6d] md:block btn text-base px-6 lg:px-12 border-2 border-black rounded-lg text-xl text-white py-2 uppercase"
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
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
