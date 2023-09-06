const HamburgerMenu = ({ toggle, setToggle }) => {
  return (
    <button
      className={`flex items-center justify-center flex-col border-none bg-transparent cursor-pointer relative w-9 h-9 gap-2 duration-500 ${
        toggle ? "rotate-180 duration-500" : ""
      }`}
      onClick={() => setToggle((prevToggle) => !prevToggle)}
    >
      <div
        className={`w-[70%] h-1 rounded bg-white-100 ${
          toggle ? "absolute duration-500 rotate-45 w-full" : ""
        }`}
      ></div>
      <div
        className={`w-full h-1 rounded bg-white-100 ${
          toggle ? "absolute duration-700 scale-x-0" : ""
        }`}
      ></div>
      <div
        className={`w-[70%] h-1 rounded bg-white-100 ${
          toggle ? "absolute duration-500 -rotate-45 w-full" : ""
        }`}
      ></div>
    </button>
  );
};

export default HamburgerMenu;
