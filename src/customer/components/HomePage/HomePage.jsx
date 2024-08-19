import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import CompanyInfo from "../Company_info/Company_info";

const HomePage = () => {
  return (
    <div>
      <div>
        <MainCarousel />
      </div>{" "}
      <div>
        <CompanyInfo />
      </div>{" "}
    </div>
  );
};

export default HomePage;
