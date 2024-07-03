import React from "react";
import Banner from "../section/Banner";
import Buy from "../section/Buy";

const Home: React.FC = () => {
  return (
    <>
      <div className="max-w-[1700px] mx-auto">
        <Banner></Banner>
        <Buy></Buy>
      </div>
    </>
  );
};

export default Home;
