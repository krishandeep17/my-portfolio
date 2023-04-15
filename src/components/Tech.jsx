import { useEffect, useState } from "react";

import { BallCanvas } from "./canvas";
import { technologies } from "../data";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 900px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", (e) => setIsMobile(e.matches));

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", (e) => setIsMobile(e.matches));
    };
  }, []);

  return (
    <div className="mt-12 flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div
          className="w-28 h-28"
          key={technology.name}
          title={technology.name}
        >
          {isMobile ? (
            <div className="decagon flex justify-center items-center w-5/6 h-5/6">
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-5/6 h-5/6"
              />
            </div>
          ) : (
            <BallCanvas icon={technology.icon} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Tech;
