import { motion } from "framer-motion";

import { styles } from "../styles";
import Tech from "./Tech";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = ({ aboutRef }) => {
  return (
    <motion.section
      ref={aboutRef}
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span" id="about">
        &nbsp;
      </span>

      <motion.h2
        className={`${styles.sectionHeadText}`}
        variants={fadeIn("right", "spring", 0.1, 1)}
      >
        About Me
      </motion.h2>

      <motion.p
        className={`${styles.sectionSubText}`}
        variants={fadeIn("up", "spring", 0.2, 1)}
      >
        Hello there! My name is Krishandeep and I'm a passionate full-stack web
        developer. My journey as a web developer began when I discovered my love
        for coding in college. Since then, I have worked on numerous projects
        and gained valuable experience in various web development languages,
        frameworks and libraries.
      </motion.p>

      <motion.p
        className={`${styles.sectionSubText}`}
        variants={fadeIn("up", "spring", 0.3, 1)}
      >
        As a full-stack web developer, I'm comfortable working on both front-end
        and back-end development. This means that I can not only design and
        create visually appealing websites that are user-friendly and
        responsive, but I can also handle complex server-side logic, API
        integrations, and database management.
      </motion.p>

      <Tech />
    </motion.section>
  );
};

export default About;
