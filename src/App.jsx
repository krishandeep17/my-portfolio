import { useRef } from "react";

import {
  About,
  Contact,
  Footer,
  Hero,
  Navbar,
  Portfolio,
  StarsCanvas,
} from "./components";

const App = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="relative z-0 bg-primary overflow-x-hidden">
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Navbar
          heroRef={heroRef}
          aboutRef={aboutRef}
          portfolioRef={portfolioRef}
          contactRef={contactRef}
        />
        <Hero aboutRef={aboutRef} heroRef={heroRef} />
      </div>
      <About aboutRef={aboutRef} />
      <Portfolio portfolioRef={portfolioRef} />
      <div className="relative z-0">
        <Contact contactRef={contactRef} />
        <StarsCanvas />
      </div>
      <Footer />
    </div>
  );
};

export default App;
