import React from "react";
import { Footer, Hero, How, Logos, Portfolio, WhatWeDo } from "./containers";
import "./App.css";
import { Navbar, Toolz } from "./components";

const App = () => {
  return (

    <>
      <nav className='gradient__bg'>
        <Navbar />
        <Hero />
      </nav>
      {/* <section>
        <Logos />
      </section> */}
        
          <WhatWeDo />
        <section>
          <Portfolio />
        </section>
        <section>
          <How />
        </section>
        <section>
          <Toolz />
        </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
