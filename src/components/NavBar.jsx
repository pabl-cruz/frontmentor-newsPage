//import useState for keeping track if mobile menu is toggled
import { useState } from "react";

//navbar component
export function NavBar() {
  //default values set for mobile menu opened
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative flex flex-row justify-between my-8 mx-4 md:mt-24 md:mb-16 md:mx-0">
      <div>
        <img src="../src/assets/images/logo.svg" alt="logo" />
      </div>
      <button onClick={toggleMenu}>
        <img
          src="../src/assets/images/icon-menu.svg"
          alt="icon menu"
          className="md:hidden"
        />
      </button>
      <div className="hidden md:flex text-greyblue-400">
        <a href="#" className="pr-6">
          Home
        </a>
        <a href="#" className="px-6">
          New
        </a>
        <a href="#" className="px-6">
          Popular
        </a>
        <a href="#" className="px-6">
          Trending
        </a>
        <a href="#" className="pl-6">
          Categories
        </a>
      </div>

      {/*mobile menu with overlay*/}
      <div
        className={`flex flex-col fixed top-0 right-0 h-full bg-offwhite transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } w-2/3 shadow-lg z-50 md:hidden`}
      >
        <button onClick={toggleMenu} className="p-8 self-end">
          <img
            src="../src/assets/images/icon-menu-close.svg"
            alt="close menu"
          />
        </button>
        <div className="flex flex-col text-darkblue-500 p-4">
          <a href="#" className="my-4 text-xl pl-4">
            Home
          </a>
          <a href="#" className="my-4 text-xl pl-4">
            New
          </a>
          <a href="#" className="my-4 text-xl pl-4">
            Popular
          </a>
          <a href="#" className="my-4 text-xl pl-4">
            Trending
          </a>
          <a href="#" className="my-4 text-xl pl-4">
            Categories
          </a>
        </div>
      </div>
    </nav>
  );
}
