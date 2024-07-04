import React from "react";
import product1 from "../assets/product/1.webp";
import product2 from "../assets/product/2.webp";
import product3 from "../assets/product/3.webp";

const Product: React.FC = () => {
  return (
    <>
      <div className="py-12">
        <div className="px-3">
          <h1 className="text-xlbase-color sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-center">
            $Water Future Products
          </h1>
          <p className="base-color text-center max-w-xl mx-auto text-xl py-6">
            $WATER introduces a unique and engaging game mechanic inspired by
            the states of water—staking (icing) and burning (vaporizing).
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-around gap-6 px-3 md:px-6">
          <div className="flex-1 card product-shadow border-2 border-black">
            <figure className="px-3 pb-6 pt-3">
              <img src={product1} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body p-3">
              <h2 className="card-title text-center  text-xl md:text-3xl text-[#2a4c75] uppercase font-bold">
                Global Water Initiatives
              </h2>
              <p className="font-medium">
                The struggle for clear water never ends, especially with global
                warming. We aim for sustainable projects that prevent
                deforestation and help with Water Distribution in the dryest
                parts of Africa!
              </p>
              <button className="btn my-6 product-shadow py-3 px-6 mx-auto w-fit bg-transparent uppercase border-4 border-black">
                coming soon
              </button>
            </div>
          </div>
          <div className="flex-1 card product-shadow border-2 border-black">
            <figure className="px-3 pb-6 pt-3">
              <img src={product2} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body p-3">
              <h2 className="card-title text-center  text-xl md:text-3xl text-[#2a4c75] uppercase font-bold">
                DONATE $WATER NFT Series
              </h2>
              <p className="font-medium">
                The $WATER NFT Series is a way to be a charitable person and
                have a chance to earn even more than you donated! Being a great
                person should be rewarded!
              </p>
              <button className="btn my-6 product-shadow py-3 px-6 mx-auto w-fit bg-transparent uppercase border-4 border-black">
                coming soon
              </button>
            </div>
          </div>
          <div className="flex-1 card product-shadow border-2 border-black">
            <figure className="px-3 pb-6 pt-3">
              <img src={product3} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body p-3">
              <h2 className="card-title text-center  text-xl md:text-3xl text-[#2a4c75] uppercase font-bold">
                FREEZING AND VAPORIZING $WATER
              </h2>
              <p className="font-medium">
                $WATER introduces a unique and engaging game mechanic inspired
                by the states of water—Freezing (Unique staking system) and
                Vaporizing (Regular burning events with charity and rewards).
              </p>
              <button className="btn my-6 product-shadow py-3 px-6 mx-auto w-fit bg-transparent uppercase border-4 border-black">
                coming soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
