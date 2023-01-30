import React from 'react';
import Masonry from 'masonry-layout';
import './msry.css'
import {image1, image2, image3, image4, image5, image6, } from "../../assets/img/index.js";
import { SSI, Dolphin, Spectrum, LWPS, Intel } from '../../assets/projects/index'

class MasonryLayout2 extends React.Component {
  componentDidMount() {
    this.msnry = new Masonry(this.grid, {
      itemSelector: '.grid-item',
      columnWidth: 316,
      gutter: 20
    });
  }

  render() {
    return (
      <div className="msry-grid" ref={grid => this.grid = grid}>
        <div className="grid-item" style={{ backgroundImage: `url(${SSI})`, backgroundSize: 'cover', height: '600px' }} />
        <div className="grid-item" style={{ backgroundImage: `url(${Spectrum})`, backgroundSize: 'cover', height: '370px' }} />
        <div className="grid-item" style={{ backgroundImage: `url(${Dolphin})`, backgroundSize: 'cover', height: '600px' }} />
        <div className="grid-item" style={{ backgroundImage: `url(${LWPS})`, backgroundSize: 'cover', height: '600px' }} />
        <div className="grid-item" style={{ backgroundImage: `url(${Intel})`, backgroundSize: 'cover', height: '370px' }} />
        <div className="grid-item" style={{ backgroundImage: `url(${image6})`, backgroundSize: 'cover', height: '370px' }} />
      </div>
    );
  }
}

export default MasonryLayout2;
