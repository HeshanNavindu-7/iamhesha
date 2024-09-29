'use client'
import Link from "next/link";
import { Cover } from "../ui/cover";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons from React Icons

const Navbar = () => {
  // State to manage the menu toggle
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Links to display on the left side of the navbar
  const leftLinks = [
    { id: 1, link: "Home", href: "/" },
    { id: 2, link: "About", href: "/#about" },
    { id: 3, link: "Projects", href: "/#projects" },
  ];

  // Links to display on the right side of the navbar
  const rightLinks = [
    { id: 4, link: "Creations", href: "/#youtube" },
    { id: 5, link: "Contact", href: "/Pages/contact" },
    { id: 6, link: "Download", href: "/Pages/contact" },
  ];

  return (
    <>
      {/* Updated the container to a non-button element */}
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="div"  // Change button to div to avoid nested button issue
        className="dark:bg-black bg-gray-800 text-white dark:text-white flex items-center space-x-10 w-full"
      >
        {/* Navbar Container */}
        <div className="bg-gray-800 text-white rounded-3xl w-full h-12 flex justify-between items-center px-4 md:px-12">
          {/* Left Links (only visible on medium screens and above) */}
          <ul className="hidden md:flex space-x-20  font-bold">
            {leftLinks.map(({ id, link, href }) => (
              <li key={id} className="cursor-pointer hover:text-[#3533cd]">
                <Link href={href}>{link}</Link>
              </li>
            ))}
          </ul>

          {/* Centered Logo */}
          <div className=" flex-1 px-12  flex justify-center">
            <Link href="/">
              <h1 className="text-2xl font-bold">
                <Cover>iamHesha</Cover>
              </h1>
            </Link>
          </div>

          {/* Right Links (only visible on medium screens and above) */}
          <ul className="hidden md:flex space-x-20 font-bold">
            {rightLinks.map(({ id, link, href }) => (
              <li key={id} className="cursor-pointer hover:text-[#3533cd]">
                <Link href={href}>{link}</Link>
              </li>
            ))}
          </ul>

          {/* Hamburger Menu for Mobile (visible only on small screens) */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {/* Toggle between menu and close icons */}
              {isOpen ? (
                <FaTimes className="w-6 h-6" /> // Close icon
              ) : (
                <FaBars className="w-6 h-6" />  // Menu icon
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu (only visible when the state `isOpen` is true) */}
        {isOpen && (
          <div className="md:hidden bg-gray-800 text-white w-full h-screen absolute top-12 left-0">
            <ul className="flex flex-col items-center space-y-8 mt-8 font-bold">
              {/* Combine both left and right links for mobile view */}
              {leftLinks.concat(rightLinks).map(({ id, link, href }) => (
                <li key={id} className="cursor-pointer hover:text-[#3533cd] text-xl">
                  <Link href={href} onClick={toggleMenu}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </HoverBorderGradient>
    </>
  );
};

export default Navbar;
