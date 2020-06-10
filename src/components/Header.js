import React from "react";
import logo from "../logo.svg";
function Header() {
  return (
    <header className="text-gray-700 body-font bg-blue-800 shadow-md mb-16">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            src={logo}
            className="w-10 h-10 text-white p-2 bg-indigo-100 rounded-full"
          ></img>
          <span className="ml-3 text-xl text-white">React-Translation</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center"></nav>
        <button className="inline-flex items-center bg-gray-200 border-0 py-2 px-3 shadow-md focus:outline-none hover:shadow-lg rounded text-base mt-4 md:mt-0 transition ease-in-out duration-300">
          <a
            className=" hover:text-gray-900 "
            href="https://github.com/nikhilm19/React-Context-Starter"
            target="_blank"
          >
            <i className="fab fa-github mr-1 "></i>Source
          </a>
        </button>
      </div>
    </header>
  );
}

export default Header;
