import { motion } from "framer-motion";

import { ComputersCanvas } from "./canvas";
import { fadeIn, zoomIn } from "../utils/motion";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className="absolute inset-0 md:top-[12%] top-[20%] max-w-7xl mx-auto sm:px-16 px-6">
        <motion.h1
          className="relative font-black text-slate-200 lg:text-7xl sm:text-6xl xs:text-5xl text-4xl leading-[1.05] mb-5 heading-primary"
          variants={zoomIn(0.2, 1.2)}
          initial="hidden"
          animate="show"
        >
          {" "}
          Hi, I'm <br />
          <span className="text-main">Krishandeep</span>, <br /> web developer
        </motion.h1>
      </div>

      <ComputersCanvas />

      <motion.div
        className="absolute left-1/2 sm:bottom-[5%] bottom-[10%] -translate-x-1/2 sm:translate-y-[5%] translate-y-[10%]"
        variants={fadeIn("up", "spring", 1.4, 1.2)}
        initial="hidden"
        animate="show"
      >
        <a href="#about" title="Scroll Down">
          <div className="w-9 h-16 rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              className="w-3 h-3 rounded-full bg-slate-200 mb-1"
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
