import React from "react";
import "./whatwedo.css";
import { backend } from "../../assets";
import { frontEnd } from "../../assets";
import { visual } from "../../assets";
import { svgLeft } from "../../assets";
import { svgRight } from "../../assets";
import { Service } from "../../components";
import Services from "../../components/what-we-do/Services";
// import pStar from "../../assets/Purple Star.svg"

const WhatWeDo = () => {
  return (
    <section className='section-what-we-do'>
      {/* <div className="four-pointed-star"></div> */}

      {/* <span className='p-star'>{pStar}</span> */}
      <div className='container'>
        <span className='subheading'>
          {svgLeft}
          Services
          {svgRight}
        </span>
        <h2 className='heading-secondary'>
          <p>I provide wide range of</p>
          <p>digital services</p>
        </h2>
        <div className='services-grid'>
          <Service
            icon={visual}
            title={"visual design"}
            text={
              "Creating a cohesive visual language that connects your brand to your audience"
            }
          />
          <Services
            icon={frontEnd}
            title={"front-end"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat faucibus pulvinar Nam luctus."
            }
          />
          <Services
            icon={backend}
            title={"backend"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat faucibus pulvinar Nam luctus."
            }
          />

          <Services icon={backend}
            title={"E-commerce"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat faucibus pulvinar Nam luctus."
            }
          />
          <Services icon={backend}
            title={"PWA Development"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat faucibus pulvinar Nam luctus."
            }
          />
          <Services icon={backend}
            title={"Voice Interface"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat faucibus pulvinar Nam luctus."
            }
          />
        </div>

        {/*  */}
      </div>
    </section>
  );
};

export default WhatWeDo;
