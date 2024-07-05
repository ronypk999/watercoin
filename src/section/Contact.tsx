import React from "react";
import bg from "../assets/contact/bg.webp";
import left from "../assets/contact/left.webp";
import right from "../assets/contact/right.webp";
import glass from "../assets/contact/glass.webp";
import { FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <>
      <div className="py-12">
        <div className="px-3 pb-24 max-w-sm mx-auto text-center">
          <h1 className="text-xl  base-color sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-center">
            Have any questions?
          </h1>
          <p className="base-color text-center max-w-xl mx-auto text-xl py-6">
            More of detailed information can also be found in our Wiki here
          </p>
          <button className="btn product-shadow py-3 px-6 mx-auto w-fit bg-transparent uppercase border-4 border-black">
            $water wiki
          </button>
        </div>
        <div
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="rounded-box space-y-12 flex flex-col-reverse md:flex-row items-center"
        >
          <img src={left} className="hidden md:block w-full max-w-[550px]" />
          <img src={glass} className="md:hidden w-full max-w-[300px]" />

          <div className="space-y-12">
            <h1 className="breakdown-text-shadow text-center  text-4xl md:text-8xl font-black text-white">
              Stay Hydrated
            </h1>
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
              <div>
                <button className="rounded-full text-white hover:scale-95 hover:bg-[#4672eb] shadow-water border-2 border-black hover:border-2 hover:border-black btn bg-[#4672eb] btn-md px-6">
                  <div className="flex items-center gap-2">
                    <FaTwitter />
                    <span>Twitter</span>
                  </div>
                </button>
              </div>
              <div>
                <button className="rounded-full text-white hover:scale-95 hover:bg-[#4672eb] shadow-water border-2 border-black hover:border-2 hover:border-black btn bg-[#4672eb] btn-md px-6">
                  <div className="flex items-center gap-2">
                    <FaTelegram />
                    <span>Telegram</span>
                  </div>
                </button>
              </div>
              <div>
                <button className="rounded-full text-white hover:scale-95 hover:bg-[#4672eb] shadow-water border-2 border-black hover:border-2 hover:border-black btn bg-[#4672eb] btn-md px-6">
                  <div className="flex items-center gap-2">
                    <FaInstagram />
                    <span>Instagram</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <img src={right} className="hidden md:block w-full max-w-[500px]" />
        </div>
      </div>
    </>
  );
};

export default Contact;
