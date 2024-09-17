import Link from "next/link";
import { Cover } from "../ui/cover";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

const Navbar = () => {
  const leftLinks = [
    { id: 1, link: "Home", href: "/" },
    { id: 2, link: "About", href: "/about" },
    { id: 3, link: "Services", href: "/services" },
  ];

  const rightLinks = [
    { id: 3, link: "Skills", href: "/skills" },
    { id: 4, link: "Projects", href: "/Pages/project" },
    { id: 5, link: "Contact", href: "/Pages/contact" },
  ];

  return (
    <>
         <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-gray-800 text-black dark:text-white flex items-center space-x-2"
      >
    <div className="bg-gray-800 text-white rounded-3xl w-full h-12  flex justify-between items-center px-4">
      <ul className="mx-24 flex space-x-24">
        {leftLinks.map(({ id, link, href }) => (
          <li key={id} className="cursor-pointer hover:text-yellow-400">
            <Link href={href}>{link}</Link>
          </li>
        ))}
      </ul>

      <div className="flex-1 flex justify-center">
        <Link href="/">
        <div>
      <h1 className="text-2xl font-bold  ">
        <Cover>iamHesha</Cover>
      </h1>
    </div>
        </Link>
      </div>

      <ul className=" mx-24 flex space-x-24">
        {rightLinks.map(({ id, link, href }) => (
          <li key={id} className="cursor-pointer hover:text-yellow-400">
            <Link href={href}>{link}</Link>
          </li>
        ))}
      </ul>
    </div>
    </HoverBorderGradient>
    </>
  );
};

export default Navbar;
