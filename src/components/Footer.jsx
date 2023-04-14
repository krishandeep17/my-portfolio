import { FiHeart } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto sm:px-16 px-6 sm:py-28 py-14">
      <p className="text-slate-200 xs:text-base text-sm font-medium flex items-center justify-center">
        Coded with
        <FiHeart fill="#915eff" stroke="#915eff" className="w-4 h-4 mx-1" /> by
        Krishandeep
      </p>
    </footer>
  );
};
export default Footer;
