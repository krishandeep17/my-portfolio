import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { projects } from "../data";
import { styles } from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  website_link,
}) => {
  return (
    <motion.div variants={fadeIn("right", "spring", index * 0.6, 1)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl"
      >
        <div className="relative">
          <img src={image} alt={name} />
          <div className="absolute inset-0 flex justify-end m-3 gap-1">
            <motion.a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              title="Source Code"
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center text-white hover:text-main active:text-main"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FiGithub />
            </motion.a>
            <motion.a
              href={website_link}
              target="_blank"
              rel="noopener noreferrer"
              title="See Live"
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center text-white hover:text-main active:text-main"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FiExternalLink />
            </motion.a>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-slate-200 font-bold text-2xl">{name}</h3>
          <p className="mt-2 text-secondary text-base">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-x-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`${tag.color} text-sm`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Portfolio = ({ portfolioRef }) => {
  return (
    <motion.section
      ref={portfolioRef}
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span" id="work">
        &nbsp;
      </span>

      <motion.h2
        className={`${styles.sectionHeadText}`}
        variants={fadeIn("right", "spring", 0.1, 1)}
      >
        My Portfolio
      </motion.h2>

      <motion.p
        className={`${styles.sectionSubText}`}
        variants={fadeIn("up", "spring", 0.2, 1)}
      >
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos in it. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
      </motion.p>

      <div className="mt-12 grid items-stretch sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </motion.section>
  );
};

export default Portfolio;
