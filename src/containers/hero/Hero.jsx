import React from "react";
import "./hero.css";
import { profile } from '../../assets';

const Hero = () => {
  return (
    <section className="section-hero">
      <div className='hero-grid'>
        <div className='hero-text-box grid-item'>
          <p>🖐️Hey, I'm</p>
          <h1>Alexander Chepkiyeng</h1>
          <p>Web Developer & IT Professional</p>
          <span className="caption ">
            <p>You only have one chance to make a first impression.</p>
             <p>Let's make it an amazing one.</p>
          </span>
          <button>
            Let's talk
          </button>
        </div>
        <div className='hero-img-box grid-item'>
          <div className="img-box">

          </div>
          {/* <img className="hero-img" src={profile} alt='developer' /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
