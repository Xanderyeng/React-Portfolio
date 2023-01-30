import React from 'react';
import Masonry from 'masonry-layout';
import './msry.css';

// // WORKING CODE

class MasonryLayout extends React.Component {
  componentDidMount() {
    this.msnry = new Masonry(this.grid, {
      itemSelector: '.grid-item',
      columnWidth: 316,
      gutter: 20
    });
  }

  render() {
    return (
      <div className="grid" ref={grid => this.grid = grid}>
        <div className="grid-item" style={{ height: '600px', background: '#a104af' }} >Div 1</div>
        <div className="grid-item" style={{ height: '370px', background: '#a104af' }}>DIv 2</div>
        <div className="grid-item" style={{ height: '600px', background: '#a104af' }}>Div 3</div>
        <div className="grid-item" style={{ height: '600px', background: '#a104af' }}> Div 5</div>
        <div className="grid-item" style={{ height: '370px', background: '#a104af' }}> Div 6</div>
        <div className="grid-item" style={{ height: '370px', background: '#a104af' }}> Div 4</div>
      </div>
    );
  }
}

export default MasonryLayout;

// WORKING CODE


// export default MyMasonryComponent;
