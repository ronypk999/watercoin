import React from "react";
import img from "../assets/more/img.webp";
import bg from "../assets/more/bg.png";

const More: React.FC = () => {
  return (
    <>
      <div
        className="py-12 shadow-buy rounded-box"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="px-3">
          <h1 className="text-xl max-w-sm mx-auto base-color sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-center">
            <span className="base-color-water">$Water</span> is an IMPACT Token
          </h1>
          <p className="base-color text-center max-w-xl mx-auto text-xl py-6">
            $WATER introduces a unique and engaging game mechanic inspired by
            the states of water—staking (icing) and burning (vaporizing).
          </p>
        </div>
        <div>
          <img src={img} className="mx-auto" />
          <div className="flex flex-col md:flex-row gap-6 py-12 px-3 md:px-6">
            <div className="flex-1 space-y-6 text-center">
              <h1 className="text-3xl md:text-5xl base-color-water font-black">
                01
              </h1>
              <h1 className="text-xl md:text-3xl base-color font-black uppercase">
                Dedicated Charity Wallet
              </h1>
              <p className="base-color max-w-lg mx-auto">
                For the sake of transparency, we will have a separate, publicly
                known wallet address to use for charity donations and any
                campaigns aimed to achieve the greater good!
              </p>
            </div>
            <div className="flex-1 space-y-6 text-center">
              <h1 className="text-3xl md:text-5xl base-color-water font-black">
                02
              </h1>
              <h1 className="text-xl md:text-3xl base-color font-black uppercase">
                Sustainable opportunities and interesting Plans
              </h1>
              <p className="base-color max-w-lg mx-auto">
                Unlike many memecoins that lack universal value, $WATER stands
                out with a clear purpose. Our token exists to ensure fair asset
                redistribution among holders while also supporting charitable
                causes. With $WATER, you can contribute to helping others
                without any personal loss.
              </p>
            </div>
            <div className="flex-1 space-y-6 text-center">
              <h1 className="text-3xl md:text-5xl base-color-water font-black">
                03
              </h1>
              <h1 className="text-xl md:text-3xl base-color font-black uppercase">
                Rapid Growth and Strong Marketing
              </h1>
              <p className="base-color max-w-lg mx-auto">
                As it already happened, we are constantly improving the approach
                and financial balancing models to unlock untapped potential of
                $WATER with outstanding Marketing and Performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default More;
