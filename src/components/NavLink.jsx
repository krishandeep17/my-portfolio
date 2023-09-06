import { motion } from "framer-motion";

const NavLink = ({ children, active, setActive, refContainer }) => {
  return (
    <li>
      <motion.a
        className={`${
          active === children ? "text-main" : "text-slate-200"
        } font-medium text-lg inline-block hover:text-main active:text-main cursor-pointer capitalize`}
        onClick={() => {
          setActive(children);
          refContainer.current.scrollIntoView({ behavior: "smooth" });
        }}
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {children}
      </motion.a>
    </li>
  );
};

export default NavLink;
