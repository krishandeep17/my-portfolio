import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";

import { close, menu } from "../assets";
import { navLinks } from "../data";
import { fadeIn } from "../utils/motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 20) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`${
        isScroll ? "bg-primary" : "bg-transparent"
      } w-full sm:px-16 px-6 py-4 fixed top-0 z-20`}
      variants={fadeIn("down", "spring", 1.2, 1.2)}
      initial="hidden"
      animate="show"
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front"></div>
              <div className="flip-card-back"></div>
            </div>
          </div>
          <p className="text-slate-200 text-xl font-bold xs:block hidden">
            Krishandeep
          </p>
        </Link>
        <ul className="flex items-center gap-3.5">
          <li>
            <motion.a
              className="text-2xl text-slate-200 inline-block hover:text-main active:text-main"
              href="https://www.instagram.com/krishandeep17"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FiInstagram />
            </motion.a>
          </li>
          <li>
            <motion.a
              className="text-2xl text-slate-200 inline-block hover:text-main active:text-main"
              href="https://github.com/krishandeep17"
              target="_blank"
              rel="noopener noreferrer"
              title="Github"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FiGithub />
            </motion.a>
          </li>
          <li>
            <motion.a
              className="text-2xl text-slate-200 inline-block hover:text-main active:text-main"
              href="https://www.linkedin.com/in/krishandeep17"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FiLinkedin />
            </motion.a>
          </li>
        </ul>
        <ul className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <li key={link.id}>
              <motion.a
                href={`#${link.id}`}
                className={`${
                  active === link.title ? "text-main" : "text-slate-200"
                } font-medium text-lg inline-block hover:text-main active:text-main`}
                onClick={() => setActive(link.title)}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {link.title}
              </motion.a>
            </li>
          ))}
        </ul>
        <div className="md:hidden flex justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-7 h-7 object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle && "hidden"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 z-10 rounded-xl min-w-[140px]`}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <motion.a
                    href={`#${link.id}`}
                    className={`${
                      active === link.title
                        ? "text-main"
                        : "text-text-slate-200"
                    } font-medium text-base hover:text-main active:text-main`}
                    whileHover={{ scale: 1.2, originX: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(!toggle);
                    }}
                  >
                    {link.title}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
