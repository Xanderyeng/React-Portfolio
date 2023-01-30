import React from "react";
import { Tabs } from "../../components";
import MyMasonryComponent from "../../components/MasonryGrid/msry";
import MasonryLayout2 from "../../components/MasonryGrid/msry2";
import MyGrid from "../../components/MasonryGrid/myGrid";
import Wrapper from "../../components/portfolioGrid/portfolioGrid";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section className='portfolio-section'>
      <div className='container'>
        {/* Portfolio */}
        <div className='portfolio-tabs'>
          <Tabs/>
        </div>
        <div className='portfolio-msry'>
          {/* <Wrapper/> */}
          {/* <MyGrid/> */}
        {/* <MyMasonryComponent/> */}
        <MasonryLayout2/>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
