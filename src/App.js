import React, { useState, useEffect, useRef } from "react";
import useLocoScroll from "./hooks/UseLocoScroll";
import {
  About,
  Featured,
  Footer,
  Gallery,
  Header,
  Navbar,
  SectionHeader,
} from "./component/components";

function App() {
  const [preloader, setPreload] = useState(true);

  useLocoScroll(!preloader);

  const [timer, settimer] = useState(3);

  const id = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreload(false);
    }, 1000);
    return () => clearInterval(timer);
  }, [preloader]);

  return (
    <>
      {preloader ? (
        <div className="loader-wrapper absolute">
          <h1>Flirty flowers</h1>
          <h2>maruf ahmed</h2>
        </div>
      ) : (
        <div className="main-container" id="main-container" ref={id}>
          <Navbar />
          <Header />
          <Featured />
          <About />
          <Gallery />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
