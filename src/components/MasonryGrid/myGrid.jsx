import React from "react";
import './masonrygrid.css'
import {
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
  } from "../../assets/img/index.js";

  import project1 from '../../assets/projects/2-lwps-sc-ke-2023-01-27-15_12_03.png'
  import project2 from '../../assets/projects/ssisouthsudan-2023-01-27-15_09_42.png'

const myGrid = () => {
  return (
    <div className="my-grid">
      <ul className='grid'>
        <li>
          <figure>
            <img width='640' height='1138' src={image1} alt='' />
            {/* <div id="item1" className="item1 image-scroll" style={{backgroundImage: `url(${project1})`}}></div> */}
          </figure>
        </li>
        <li>
          <figure>
            <img width='640' height='427' src={image2} alt='' />
            {/* <div id="item2" className="item2 image-scroll" style={{backgroundImage: `url(${project2})`}}></div> */}
          </figure>
        </li>
        <li>
          <figure>
            <img width='640' height='427' src={image3} alt='' />
            {/* <div id="item3" className="item3 image-scroll" style={{backgroundImage: `url(${project2})`}}></div> */}
          </figure>
        </li>
        <li>
          <figure>
            <img width='640' height='427' src={image4} alt='' />
            {/* <div id="item3" className="item3 image-scroll" style={{backgroundImage: `url(${project2})`}}></div> */}
          </figure>
        </li>
        <li>
          <figure>
            <img width='640' height='427' src={image5} alt='' />
          </figure>
        </li>
        <li>
          <figure>
            <img width='640' height='427' src={image6} alt='' />
          </figure>
        </li>
        
        
      </ul>
    </div>
  );
};

export default myGrid;
