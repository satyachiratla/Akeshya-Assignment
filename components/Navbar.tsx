"use client";

import { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";

import Logo from "@/public/images/logo.png";
import NavLink from "./NavLink";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <>
      <header className="h-24 fixed top-0 left-0 right-0 bg-white flex items-center px-3 md:px-20 z-50 border-b border-gray-100">
        <nav className="flex items-center justify-between w-full">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={Logo}
              alt="logo"
              className="w-12 h-12 md:w-16 md:h-16"
            />
            <h1 className="font-bold text-xl md:text-3xl text-blue-900 tracking-wider">
              AKESHYA
            </h1>
          </Link>
          <div>
            <GiHamburgerMenu
              size={30}
              onClick={toggleHandler}
              className="cursor-pointer lg:hidden"
            />
          </div>
          <ul className="hidden lg:flex items-center gap-8">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/about">About</NavLink>
            </li>
            <li>
              <NavLink href="/services">Services</NavLink>
            </li>
            <li className="cursor-pointer text-white bg-blue-900 hover:bg-sky-600 rounded-full px-5 py-2 translate-all duration-200">
              <Link href="/contact">Contact us</Link>
            </li>
          </ul>
        </nav>
      </header>
      {toggle && <MobileNav toggleHandler={toggleHandler} />}
    </>
  );
}
