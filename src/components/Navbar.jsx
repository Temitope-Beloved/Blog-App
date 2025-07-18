import React, { useEffect, useState } from "react";
import { refs } from "../Constant/Constant";
import { Link, NavLink } from "react-router-dom";
import useThemeStore from "../Store/ThemeStore";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/outline";
import { Bars3BottomRightIcon } from "@heroicons/react/16/solid";
const Navbar = () => {
  const [toogle, setToogle] = useState(false);

  const toggleMenu = () => {
    setToogle((prev) => !prev);
  };

  const { theme, toogleTheme } = useThemeStore();
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className=" bg-white dark:bg-gray-900 dark:text-white h-[3.8rem] ">
      <nav className="flex justify-between items-center mx-10 p-[10px] border-b-2 sm:mx-3 relative ">
        <div>
          <h2 className="bg-black dark:bg-white dark:text-black text-white p-[12px] w-[40px] flex flex-1 justify-center items-center h-[40px] rounded-full font-semibold text-xl  ">
            B
          </h2>
        </div>

        <div className="flex items-center space-x-7 sm:hidden">
          {refs.map((ref) => (
            <ul className="" key={ref.id}>
              <li className="">
                <NavLink className="" to={ref.path}>
                  {ref.to}
                </NavLink>
              </li>
            </ul>
          ))}
        </div>

        <div className="flex items-center space-x-4 sm:hidden">
          <div className="flex items-center justify-between border-2 border-stone-400 rounded-full w-[50px] h-[25px] relative">
            <MoonIcon className="w-[20px]" />
            <div
              className={`bg-stone-300  w-[21px] h-[21px] rounded-full  absolute ${
                theme === "light" ? "dark" : "light"
              }`}
              onClick={toogleTheme}
              style={
                theme === "dark"
                  ? { left: 1, background: "#0f172a" }
                  : { right: 1, background: "white" }
              }></div>
            <SunIcon className="w-[20px]" />
          </div>

          <div className="flex items-center border-r-[3px] pr-2 ">
            {/* <input type="text" name="search" id="search"  className="border-none bg-transparent outline-none "/> */}
            <MagnifyingGlassIcon className="w-[20px]" />
          </div>

          <div>
            <Link to={"/signup"}>Sign Up</Link>
          </div>
        </div>

        <div className="hidden sm:flex transition" onClick={toggleMenu}>
          {toogle ? <XMarkIcon className="w-[30px] "/> :
          <Bars3BottomRightIcon className="w-[30px] " />}
        </div>



        {/* Mobile Navigation */}  
       {toogle ? (
          <div className="absolute w-[10rem] h-[12rem] bg-white rounded-lg text-center shadow-lg top-[4rem] right-[1.5rem] font-poppins z-50 " >
            {refs.map((ref) => (
              <ul className="" key={ref.id}>
                <li className="text-[18px] transition-colors font-medium block hover:bg-slate-100 w-full py-2 rounded-lg">
                  <NavLink className="w-full" to={ref.path} onClick={toggleMenu}>
                    {ref.to}
                  </NavLink>
                </li>
              </ul>
            ))}
          </div>

        ) : null}
      </nav>
    </div>
  );
};

export default Navbar;
