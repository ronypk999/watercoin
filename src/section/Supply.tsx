import React from "react";
import calender from "../assets/supply/calender.svg";
import calenderBlue from "../assets/supply/calender-blue.svg";
import timer from "../assets/supply/timer.svg";
import bag from "../assets/supply/bag.svg";
import trend from "../assets/supply/trend.svg";
import ice from "../assets/supply/ice.svg";
import iceBurned from "../assets/supply/ice2.svg";
import doc from "../assets/supply/doc.svg";
import calenderGreen from "../assets/supply/calender-green.svg";
import poster from "../assets/supply/poster.png";
import video from "../assets/supply/video.mp4";
const Supply: React.FC = () => {
  return (
    <>
      <div className="pt-48 md:pt-32">
        <div>
          <h1 className="text-xl base-color sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-center">
            Supply Dynamics: <br />
            <span className="base-color-water">The States of Water</span>
          </h1>
          <p className="base-color text-center max-w-xl mx-auto text-xl py-6">
            $WATER introduces a unique and engaging game mechanic inspired by
            the states of water—staking (icing) and burning (vaporizing).
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center px-3 md:px-6">
          <div className="flex-1 space-y-3 py-8 px-6 border-2 border-[#58b7e7] rounded-box">
            <img src={ice} className="mx-auto py-6" />
            <h1 className="text-xl base-color sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase text-center">
              Freezing (Staking)
            </h1>
            <p className="max-w-lg mx-auto base-color text-center">
              Just as water turns into ice when it gets cold, $WATER tokens can
              be staked (iced) to earn rewards. Stakers are rewarded with
              additional $WATER tokens over time, simulating the process of
              accumulating ice
            </p>
            <div className="bg-[#f1ebf7] p-6 rounded-box  base-color">
              <h3 className="md:text-xl font-black pb-3 uppercase">
                Mechanism
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <img src={calender} />
                  <p>Users stake $WATER tokens for a specified period.</p>
                </div>
                <div className="flex items-center gap-4">
                  <img src={timer} />
                  <p>The longer the staking period, the higher the rewards..</p>
                </div>
                <div className="flex items-center gap-4">
                  <img src={bag} />
                  <p>
                    Staking rewards are distributed from the community rewards
                    pool.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#ebf2f7] p-6 rounded-box  base-color">
              <h3 className="md:text-xl font-black pb-3 uppercase">
                Simple Math
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <img src={calenderBlue} />
                  <p>
                    4.5% total allocated for a year between 3 pools: daily,
                    weekly, and monthly
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <img src={trend} />
                  <p>
                    At 20% of the presale tokens evenly staked to these pools,
                    users will get 50% APR
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="uppercase bg-white font-black border-4 border-[#58b7e7] border-dotted rounded-full py-2 px-4 mx-auto">
                    <span className="text-black">APR = </span>
                    <span className="text-[#B55AD5]">
                      % total staking rewards{" "}
                    </span>
                    <span className="text-[#66DD7C]"> / % of total supply</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-3 py-8 px-6 border-2 border-[#58b7e7] rounded-box">
            <img src={iceBurned} className="mx-auto py-6" />
            <h1 className="text-xl base-color sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase text-center">
              Vaporizing (Burning)
            </h1>
            <p className="max-w-lg mx-auto base-color text-center">
              When water is heated, it turns into vapor and disappears.
              Similarly, $WATER tokens can be burned (vaporized) to reduce the
              total supply, increasing scarcity and potentially the value of the
              remaining tokens.
            </p>
            <div className="bg-[#ebf7ec] p-6 rounded-box  base-color">
              <h3 className="md:text-xl font-black pb-3 uppercase">
                Mechanism
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <img src={calenderGreen} />
                  <p>Users can send $WATER tokens to burn contract</p>
                </div>
                <div className="flex items-center gap-4">
                  <img src={doc} />
                  <p>
                    Ticon Every week, 25% of these tokens burned, 25% sent to
                    charity, and 50% are rained (raffled) among all participants
                    giving them back from 0.1x to 10x of tokens they burned
                    (with 2 times higher odds for getting less than 1x)
                  </p>
                </div>
              </div>
            </div>
            <div>
              <video
                className="rounded-box"
                autoPlay
                loop
                muted
                playsInline
                poster={poster}
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video player
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Supply;
