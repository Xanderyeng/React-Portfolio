import React from "react";
import { Features } from "../../components";
import { searching } from "../../assets";
import { development } from "../../assets";
import { updating } from "../../assets";
import { visual } from "../../assets";
import "./how.css";


const How = () => {
    

  return (
    <section className='section-how-it-works'>
      <div className='container grid grid--4-cols'>
        <Features icon={searching} title={'searching'}/>
        <Features icon={development} title={'development'}/>
        <Features icon={updating} title={'updating'} />
        <Features icon={visual} title={'visual'} />
      </div>
    </section>
  );
};

export default How;
