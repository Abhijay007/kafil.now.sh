import React from "react";

const Header = () => {
  const pages = ["projects", "about", "blog", "contact"];
  return (
    <header className="flex px-4 py-4 bg-blue-900 justify-between text-white">
      <h1>Kafil</h1>
      <nav>
        <ul className="flex flex-row space-x-4 cursor-pointer">
          {pages.map((page) => {
            return (
              <li key={page} className="capitalize">
                {page}
              </li>
            );
          })}
          <svg
            className="w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </ul>
      </nav>
    </header>
  );
};

export default Header;