"use client";

import { createContext, useState } from "react";

export const NavContext = createContext({
  toggle: false,
  toggleHandler: () => {},
});

type NavContextProviderProps = {
  children: React.ReactNode;
};

export default function NavContextProvider({
  children,
}: NavContextProviderProps) {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };

  const value = {
    toggle: toggle,
    toggleHandler: toggleHandler,
  };

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}
