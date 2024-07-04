import React from "react";
import dex from "../assets/buy/dex.svg";
import cex from "../assets/buy/cex.svg";
import raydium from "../assets/buy/raydium.webp";
import question from "../assets/buy/question-icon.svg";
import { IoEye } from "react-icons/io5";
import sol from "../assets/buy/sol-icon.webp";

const Buy: React.FC = () => {
  return (
    <>
      <div className="shadow-buy bg-[#f5fafb] flex flex-col md:flex-row gap-6 py-12 px-6 ">
        <div className="flex-1">
          <div className="bg-[#98d5fb] text-center p-6 rounded-lg border-2 border-black">
            <img src={dex} className="mx-auto py-12" />
            <h1 className="uppercase text-3xl font-black">BuY on Dex</h1>
            <p className="text-black font-medium py-3">
              Use your Phantom wallet and connect to Raydium or Jupiter to buy
              $WATER
            </p>
            <div className="space-y-3">
              <div>
                <button className="px-6 btn hover:scale-95 hover:bg-[#8f46eb] bg-[#8f46eb] shadow-water border-2 border-black hover:border-2 hover:border-black">
                  <img src={raydium} className="w-6" />
                  <span className="uppercase text-white">Raydium</span>
                </button>
              </div>
              <div>
                <button className="px-6 btn hover:scale-95 hover:bg-[#8f46eb] bg-[#8f46eb] shadow-water border-2 border-black hover:border-2 hover:border-black">
                  <img src={raydium} className="w-6" />
                  <span className="uppercase text-white">Raydium</span>
                </button>
              </div>
              <div>
                <button className="px-6 btn hover:scale-95 hover:bg-[#8f46eb] bg-[#8f46eb] shadow-water border-2 border-black hover:border-2 hover:border-black">
                  <img src={raydium} className="w-6" />
                  <span className="uppercase text-white">Raydium</span>
                </button>
              </div>
            </div>
          </div>
          <div>
            <h3 className="flex font-bold items-center gap-2 justify-center py-3 text-[#3aa3f4]">
              <IoEye /> Track $water CHART:
            </h3>
            <div className="space-y-3">
              <div>
                <button className="px-6 w-full hover:bg-white bg-white btn hover:scale-95 shadow-water border-2 border-black hover:border-2 hover:border-black">
                  <img src={raydium} className="w-6" />
                  <span className="uppercase text-black">DexTools</span>
                </button>
              </div>
              <div>
                <button className="px-6 w-full hover:bg-white bg-white btn hover:scale-95 shadow-water border-2 border-black hover:border-2 hover:border-black">
                  <img src={raydium} className="w-6" />
                  <span className="uppercase text-black">DexTools</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#d8e7f0] flex-1 text-center p-6 rounded-lg border-2 border-black">
          <img src={cex} className="mx-auto py-12" />
          <h1 className="uppercase text-3xl font-black">BuY on Cex</h1>
          <p className="text-black font-medium py-3">
            $WATER will be Listed on most popular CEXes bitget
          </p>
          <div className="gap-3 flex flex-wrap justify-center">
            <div>
              <button className="px-6 btn hover:scale-95 hover:bg-[#8f46eb] bg-[#8f46eb] shadow-water border-2 border-black hover:border-2 hover:border-black">
                <img src={raydium} className="w-6" />
                <span className="uppercase text-white">Raydium</span>
              </button>
            </div>
            <div>
              <button className="px-6 btn hover:scale-95 hover:bg-[#8f46eb] bg-[#8f46eb] shadow-water border-2 border-black hover:border-2 hover:border-black">
                <img src={raydium} className="w-6" />
                <span className="uppercase text-white">Raydium</span>
              </button>
            </div>
            <div>
              <button className="px-6 btn hover:scale-95 hover:bg-[#8f46eb] bg-[#8f46eb] shadow-water border-2 border-black hover:border-2 hover:border-black">
                <img src={raydium} className="w-6" />
                <span className="uppercase text-white">Raydium</span>
              </button>
            </div>
            <div>
              <button className="px-6 btn hover:scale-95 hover:bg-[#8f46eb] bg-[#8f46eb] shadow-water border-2 border-black hover:border-2 hover:border-black">
                <img src={raydium} className="w-6" />
                <span className="uppercase text-white">Raydium</span>
              </button>
            </div>
            <div>
              <button className="px-6 btn hover:scale-95 hover:bg-[#8f46eb] bg-[#8f46eb] shadow-water border-2 border-black hover:border-2 hover:border-black">
                <img src={raydium} className="w-6" />
                <span className="uppercase text-white">Raydium</span>
              </button>
            </div>
            <div>
              <button className="px-6 btn hover:scale-95 hover:bg-[#8f46eb] bg-[#8f46eb] shadow-water border-2 border-black hover:border-2 hover:border-black">
                <img src={raydium} className="w-6" />
                <span className="uppercase text-white">Raydium</span>
              </button>
            </div>
            <div>
              <button className="px-6 btn hover:scale-95 hover:bg-[#8f46eb] bg-[#8f46eb] shadow-water border-2 border-black hover:border-2 hover:border-black">
                <img src={raydium} className="w-6" />
                <span className="uppercase text-white">Raydium</span>
              </button>
            </div>
            <div>
              <button className="px-6 btn hover:scale-95 hover:bg-[#8f46eb] bg-[#8f46eb] shadow-water border-2 border-black hover:border-2 hover:border-black">
                <img src={raydium} className="w-6" />
                <span className="uppercase text-white">Raydium</span>
              </button>
            </div>
            <div>
              <button className="px-6 btn hover:scale-95 hover:bg-[#8f46eb] bg-[#8f46eb] shadow-water border-2 border-black hover:border-2 hover:border-black">
                <img src={raydium} className="w-6" />
                <span className="uppercase text-white">Raydium</span>
              </button>
            </div>
            <div>
              <button className="px-6 btn hover:scale-95 hover:bg-[#8f46eb] bg-[#8f46eb] shadow-water border-2 border-black hover:border-2 hover:border-black">
                <img src={raydium} className="w-6" />
                <span className="uppercase text-white">Raydium</span>
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6 flex-1">
          <div className="bg-[#98d5fb] text-center p-6 rounded-lg border-2 border-black">
            <img src={question} className="mx-auto py-12" />
            <h1 className="uppercase text-3xl font-black">How to buy</h1>
            <p className="text-black font-medium py-3">
              We create a special WIKI where you can find any answers
            </p>
            <div className="space-y-3">
              <div>
                <button className="px-6 hover:bg-white bg-white btn hover:scale-95 shadow-water border-2 border-black hover:border-2 hover:border-black">
                  <img src={raydium} className="w-6" />
                  <span className="uppercase text-black">$Water WIKI</span>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[#98d5fb] text-center p-6 rounded-lg border-2 border-black">
            <img src={sol} className="mx-auto w-8 py-2" />
            <h1 className="text-xl font-bold">Smart contract address:</h1>
            <p className="text-black font-medium py-3 break-all">
              B6h248NJkAcBAkaCnji889a26tCiGXGN8cxhEJ4dX391
            </p>
            <p className="py-3 text-red-500 font-bold">
              *Not for buying the coin. Don't send anything to it or they will
              be lost forever.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buy;
