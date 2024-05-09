import React from "react";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import styles from "../../style";
import Feature from "../Feature/Feature";
import Builder from "../Builder/Builder";
import Feature2 from "../Feature2/Feature2";
import Feature3 from "../Feature3/Feature3";
import Review from "../Review/Review";
import { banner } from "../../assets";
import Suggestion from "../Suggestion/Suggestion";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div className={`flex flex-col ${styles.boxWidth} md:px-[7rem] px-2 hero-bg`}>
      <div className="flex flex-col md:gap-[2rem] gap-[1rem]">
        <div className="bg-[#06030E]s">
          <div className={`md:mt-[5rem] mt-[2rem] ${styles.boxWidth}`}>
            <Navbar />
          </div>
          <div className={`md:mt-[14rem] mt-[2rem] ${styles.boxWidth}`}>
            <Hero />
          </div>
          <div className={`md:mt-[6rem] mt-[2rem] ${styles.boxWidth}`}>
            <Feature />
          </div>
          <div className={`md:mt-[6rem] mt-[2rem] ${styles.boxWidth}`}>
            <Builder />
          </div>
          <div className={`md:mt-[6rem] mt-[2rem] ${styles.boxWidth}`}>
            <Feature2 />
          </div>
          <div className={`md:mt-[6rem] mt-[2rem] ${styles.boxWidth}`}>
            <Feature3 />
          </div>
          <div className={`md:mt-[6rem] mt-[2rem] ${styles.boxWidth}`}>
            <Review />
          </div>
          <div className={`md:mt-[6rem] mt-[2rem] ${styles.boxWidth}`}>
            <img src={banner} alt="" />
          </div>
          <div className={`md:mt-[6rem] mt-[2rem] ${styles.boxWidth}`}>
            <Suggestion />
          </div>
          <div className={`md:mt-[6rem] mt-[2rem] ${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;