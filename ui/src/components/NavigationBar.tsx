import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
const NavigationBar = () => {
  const [navbaropen, setNavBarOpen] = useState<boolean>(false);
  return (
    <nav className="w-full shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            {/* <img
              src={Logo}
              alt="logo"
              className="w-12 h-12 items-center justify-center"
            /> */}
            <h2 className="text-red-600">NATIONAL DRIVERS COMPANY LIMITED</h2>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavBarOpen(!navbaropen)}
              >
                {navbaropen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbaropen ? "block" : "hidden"
          }`}
        >
          <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            <li className="text-red-600">
              <NavLink to={"/"}>HOME</NavLink>
            </li>
            <li className="text-red-600">
              <NavLink to={"/assignments"}>ABOUT</NavLink>
            </li>
            <li className="text-red-600">
              <NavLink to={"#"}>SERVICES</NavLink>
            </li>
            <li className="text-red-600">
              <NavLink to={"#"}>GALLERY</NavLink>
            </li>
            <li className="text-red-600">
              <NavLink to={"#"}>BOOK APPOINTMENT</NavLink>
            </li>
          </ul>
          <div className="mt-3 space-y-2 lg:hidden md:inline-block">
            <NavLink
              to={"/signin"}
              className="inline-block px-4 py-2 text-center text-white bg-red-600 rounded-md shadow hover:bg-gray-800"
            >
              SIGN IN
            </NavLink>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          <NavLink
            to="/signin"
            className="px-4 py-2 text-white bg-red-600 rounded-md shadow hover:bg-gray-600"
          >
            SIGN IN
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
