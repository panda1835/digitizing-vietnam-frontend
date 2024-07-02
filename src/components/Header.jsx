import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import logo from "../assets/logo.png";

import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const { t } = useTranslation();
  const [openNav, setOpenNav] = useState(false); // State for mobile navigation

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <header className="bg-primary-gray">
      {/* Navigation bar */}
      <nav className="flex py-3 max-w-screen-lg mx-auto items-center justify-between">
        <div className="ml-5 w-60">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="w-28"></div> {/* Empty box */}
        <div className="flex items-center justify-between flex-grow md:block hidden">
          <ul className="flex justify-evenly items-center">
            {[
              "home",
              "about-us",
              "our-collections",
              "blogs",
              "online-resources",
            ].map((item) => (
              <li
                key={item}
                className={`text-primary-blue font-bold text-xl border-b-2 ${
                  activeItem === item
                    ? "border-primary-yellow"
                    : "border-transparent"
                } hover:border-primary-yellow transition duration-300`}
                onClick={() => handleItemClick(item)}
              >
                <Link to={`/${item === "home" ? "" : item}`}>{t(item)}</Link>
              </li>
            ))}
            <li className="text-white bg-primary-blue pl-2 pr-2 p-1 rounded">
              <LanguageSelector />
            </li>
          </ul>
        </div>
        <button
          className="md:hidden block mr-5 text-primary-blue bg-primary-gray p-2 rounded flex justify-end"
          onClick={toggleNav}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>
      {/* Mobile Navigation */}
      {openNav && (
        <div className="lg:hidden flex flex-col items-center">
          <ul className="mt-4 flex flex-col items-center gap-2">
            {[
              "home",
              "about-us",
              "our-collections",
              "blogs",
              "online-resources",
            ].map((item) => (
              <li
                key={item}
                className={`text-primary-blue font-bold text-xl border-b-2 ${
                  activeItem === item
                    ? "border-primary-yellow"
                    : "border-transparent"
                }`}
                onClick={() => handleItemClick(item)}
              >
                <Link to={`/${item === "home" ? "" : item}`}>{t(item)}</Link>
              </li>
            ))}
            <li className="text-white bg-primary-blue pl-2 pr-2 p-1 rounded mb-5">
              <LanguageSelector />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
