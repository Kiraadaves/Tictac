import { useState } from "react";
import logo from "../assets/images/logo.svg";
import opened from "../assets/images/icon-menu.svg";
import close from "../assets/images/icon-menu-close.svg";
import "animate.css/animate.min.css";


const tabs = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "New",
  },
  {
    id: 3,
    name: "Popular",
  },
  {
    id: 4,
    name: "Trending",
  },
  {
    id: 5,
    name: "Categories",
  }
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <div className="relative">
      <div className="container flex items-center justify-between">
        <div>
          <img alt="logo" src={logo} className="md:w-20" />
        </div>
        <div
          className={`bg-white md:bg-transparent md:flex absolute right-0 top-0 ${
            open && "animate__animated animate__pulse dropdown"
          }`}
        >
          <button className={`md:hidden pt-3`} onClick={toggleMenu}>
            {open ? (
              <img src={close} alt="close" className="absolute right-0 top-0" />
            ) : (
              <img src={opened} alt="open" />
            )}
          </button>
          <div
            className={`${
              open ? "block" : "hidden"
            } md:flex md:items-center mt-36 mr-28 md:mr-0 md:mt-0  pl-6 md:pl-0 pr-12 md:pr-0 pb-72 md:pb-0`}
          >
            <ul className="md:flex md:items-center  md:gap-10 md:row-span-2 order-3 ">
              {tabs.map((tab) => (
                <li
                  className={`text-lg mt-6 md:mt-0 cursor-pointer animate__animated hover:text-[#f15e50] ${
                    isHovered ? "animate__pulse" : ""
                  }`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  key={tab.id}
                >
                  {tab.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
