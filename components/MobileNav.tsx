import Link from "next/link";
import NavLink from "./NavLink";

import { RxCross2 } from "react-icons/rx";

type MobileNavProps = {
  toggleHandler: () => void;
};

export default function MobileNav({ toggleHandler }: MobileNavProps) {
  return (
    <header className="bg-black fixed top-0 left-0 right-0 bottom-0 h-full p-6 pt-16 z-50">
      <RxCross2
        size={25}
        onClick={toggleHandler}
        className="cursor-pointer text-white absolute right-6 top-6"
      />
      <nav className="bg-white h-full p-4 rounded-lg z-50">
        <ul className="flex flex-col gap-4">
          <li onClick={toggleHandler}>
            <NavLink href="/">Home</NavLink>
          </li>
          <li onClick={toggleHandler}>
            <NavLink href="/about">About</NavLink>
          </li>
          <li onClick={toggleHandler}>
            <NavLink href="/services">Services</NavLink>
          </li>
          <li
            onClick={toggleHandler}
            className="cursor-pointer text-white bg-blue-900 hover:bg-sky-600 rounded-full px-5 py-2 translate-all duration-200"
          >
            <Link href="/contact">Contact us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
