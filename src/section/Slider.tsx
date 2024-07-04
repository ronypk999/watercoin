import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import maldiv from "../assets/slider/maldiv.webp";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Slider: React.FC = () => {
  return (
    <>
      <div className="py-12">
        <div>
          <h1 className="text-xl text-[#2A4C75] sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-center">
            BECOME A <span className="text-[#58b7e7]">$WATER</span> HOLDER{" "}
            <br />– WIN HUGE PRIZES
          </h1>
          <p className="text-[#58b7e7] text-center font-bold text-xl py-6">
            And so much more coming soon
          </p>
        </div>
        <div className="px-3">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation={true}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            style={{ paddingBottom: "150px" }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },

              1080: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              <div className="card">
                <figure className="pb-3">
                  <img src={maldiv} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body p-6 bg-base-200">
                  <h2 className="card-title text-xl md:text-3xl text-[#2a4c75] uppercase font-bold">
                    MALDIVES{" "}
                    <span className="slider-text-shadow text-[#58b7e7]">
                      Getaway
                    </span>
                  </h2>
                  <p>
                    Global charity and research initiatives that will drive
                    attention of millions of people. $WATER aims to have a
                    net-positive impact on real world with the help of charity.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <figure className="pb-3">
                  <img src={maldiv} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body p-6 bg-base-200">
                  <h2 className="card-title text-xl md:text-3xl text-[#2a4c75] uppercase font-bold">
                    MALDIVES{" "}
                    <span className="slider-text-shadow text-[#58b7e7]">
                      Getaway
                    </span>
                  </h2>
                  <p>
                    Global charity and research initiatives that will drive
                    attention of millions of people. $WATER aims to have a
                    net-positive impact on real world with the help of charity.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <figure className="pb-3">
                  <img src={maldiv} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body p-6 bg-base-200">
                  <h2 className="card-title text-xl md:text-3xl text-[#2a4c75] uppercase font-bold">
                    MALDIVES{" "}
                    <span className="slider-text-shadow text-[#58b7e7]">
                      Getaway
                    </span>
                  </h2>
                  <p>
                    Global charity and research initiatives that will drive
                    attention of millions of people. $WATER aims to have a
                    net-positive impact on real world with the help of charity.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <figure className="pb-3">
                  <img src={maldiv} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body p-6 bg-base-200">
                  <h2 className="card-title text-xl md:text-3xl text-[#2a4c75] uppercase font-bold">
                    MALDIVES{" "}
                    <span className="slider-text-shadow text-[#58b7e7]">
                      Getaway
                    </span>
                  </h2>
                  <p>
                    Global charity and research initiatives that will drive
                    attention of millions of people. $WATER aims to have a
                    net-positive impact on real world with the help of charity.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Slider;
