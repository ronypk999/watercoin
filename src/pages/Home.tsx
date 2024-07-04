import React from "react";
import Banner from "../section/Banner";
import Buy from "../section/Buy";
import Feature from "../section/Feature";
import Slider from "../section/Slider";

const Home: React.FC = () => {
  return (
    <>
      <div className="max-w-[1700px] mx-auto">
        <Banner></Banner>
        <Buy></Buy>
        <Feature></Feature>
        <Slider></Slider>
      </div>
    </>
  );
};

export default Home;
