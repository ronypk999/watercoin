import React from "react";
import Banner from "../section/Banner";
import Buy from "../section/Buy";
import Feature from "../section/Feature";
import Slider from "../section/Slider";
import RoadNomics from "../section/RoadNomics";
import Supply from "../section/Supply";
import More from "../section/More";
import Product from "../section/Product";
import Contact from "../section/Contact";

const Home: React.FC = () => {
  return (
    <>
      <div className="max-w-[1700px] mx-auto">
        <Banner></Banner>
        <Buy></Buy>
        <Feature></Feature>
        <Slider></Slider>
        <RoadNomics></RoadNomics>
        <Supply></Supply>
        <More></More>
        <Product></Product>
        <Contact></Contact>
      </div>
    </>
  );
};

export default Home;
