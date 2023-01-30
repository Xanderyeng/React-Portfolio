import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { LWPS, Dolphin, SSI } from "../../assets";

const projects = [
  {
    title: "Lizzie Preparatory Junior Secondary",
    category: "e-learning",
    path: LWPS,
  },
  { title: "Green Dolphin Cleaners", category: "corporate", path: Dolphin },
  { title: "Safety Services International", category: "corporate", path: SSI },
];

// The number of columns change by resizing the window
class Wrapper extends React.Component {
  render() {
    return (
      <Masonry columnsCount={3} gutter='10px'>
        {projects.map((project, i) => (
          <img
            key={i}
            src={project.path}
            style={{ width: "100%", display: "block" }}
          />
        ))}
      </Masonry>
    );
  }
}

// const portfolioGrid = () => {

//   return (
//     <>
//     portfolioGrid

//     </>
//   )
// }

export default Wrapper;
