import React from "react";

function Header() {
  return (
    <header className="text-gray-700 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">React-Translation</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center"></nav>
        <button className="inline-flex items-center bg-gray-200 border-0 py-2 px-3 shadow-md focus:outline-none hover:shadow-lg rounded text-base mt-4 md:mt-0 transition ease-in-out duration-300">
          <a className=" hover:text-gray-900 ">
            <i className="fab fa-github mr-1 "></i>Source
          </a>
        </button>
      </div>
    </header>
  );
}

export default Header;
