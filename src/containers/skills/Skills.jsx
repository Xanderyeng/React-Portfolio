import React from "react";
import "./skills.css";
import { searching } from "../../assets";

const Skills = () => {
 
  return (
    <div className='glass-card'>
      <div className='glass-box'>
      {/* to replace with prop / svg */}
        {searching}
      </div>
    </div>
  );
};

export default Skills;
