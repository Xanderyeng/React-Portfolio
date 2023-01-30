import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHandWave } from "@fortawesome/free-solid-svg-icons";
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import "./hero.css";
import { profile } from "../../assets";

const Hero = () => {
  return (
    <section className='section-hero'>
      <div className='hero-grid'>
        <div className='hero-text-box grid-item'>
          {/* 🖐️ */}
          <p>
          {/* <FontAwesomeIcon icon={solid('hand-wave')} /> */}
          🖐️ Hey, I'm
          </p>
          <h1>Alexander Chepkiyeng</h1>
          <p>Web Developer & IT Professional</p>
          <span className='caption '>
            <p>You only have one chance to make a first impression.</p>
            <p>Let's make it an amazing one.</p>
          </span>
          <button>Let's talk</button>
        </div>
        <div className='hero-img-box grid-item'>
          <div className='img-box'></div>
          {/* <img className="hero-img" src={profile} alt='developer' /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
