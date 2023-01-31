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
        <Service icon={visual} title={'visual design'} text={'Creating a cohesive visual language that connects your brand to your audience'}/>
          {/* <div className='services'>
            {visual}
            <header>
              <h3 className='service-title'>visual design</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                volutpat faucibus pulvinar Nam luctus.
              </p>
            </header>
          </div> */}
          <Services icon={frontEnd} title={'front-end development'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat faucibus pulvinar Nam luctus.'}/>
          {/* <div className='services'>
            {frontEnd}
            <header>
              <h3 className='service-title'>front-end development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                volutpat faucibus pulvinar Nam luctus.
              </p>
            </header>
          </div> */}
          <Services icon={backend} title={'backend development'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat faucibus pulvinar Nam luctus.'}/>
          {/* <div className='services'>
            {backend}
            <header>
              <h3 className='service-title'>backend development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                volutpat faucibus pulvinar Nam luctus.
              </p>
            </header>
          </div> */}
        </div>

        {/*  */}
      </div>
    </section>
  );
};

export default WhatWeDo;
