import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-6 max-w-screen-xl mx-auto relative">
      <a href="/">
        <img src="/images/logo.svg" alt="homepage" className="w-16 h-10 md:w-20 md:h-12" />
      </a>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="block md:hidden absolute top-0 right-0 mt-7 mr-0 z-50"
      >
        <img
          src={isOpen ? "/images/icon-menu-close.svg" : "/images/icon-menu.svg"}
          alt={isOpen ? "close menu" : "open menu"}
          className="w-10 h-10"
        />
      </button>
      <nav
        className={`${
          isOpen ? "fixed top-0 right-0 h-full w-80 bg-c-white shadow-lg z-40" : "hidden"
        } md:flex md:relative md:h-auto md:w-auto md:bg-transparent md:shadow-none`}
      >
        <ul className="flex flex-col text-f-xs space-y-6 p-8 md:flex-row md:space-x-14 md:space-y-0 sm:p-0 mt-32 md:mt-0">
          <li>
            <a className="text-c-gray sm:text-c-blue md:text-c-blue text-lg leading-6" href="/home">
              Home
            </a>
          </li>
          <li>
            <a
              className="text-c-gray sm:text-c-blue md:text-c-blue text-lg leading-6"
              href="/about"
            >
              New
            </a>
          </li>
          <li>
            <a
              className="text-c-gray sm:text-c-blue md:text-c-blue text-lg leading-6"
              href="/about"
            >
              Popular
            </a>
          </li>
          <li>
            <a
              className="text-c-gray sm:text-c-blue md:text-c-blue text-lg leading-6"
              href="/about"
            >
              Trending
            </a>
          </li>
          <li>
            <a
              className="text-c-gray sm:text-c-blue md:text-c-blue text-lg leading-6"
              href="/about"
            >
              Categories
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
