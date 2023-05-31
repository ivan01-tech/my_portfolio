"use client";

import React, { createContext, useState } from "react";

export type typeContextMobile = {
  ShowMobileMenu: boolean;
  toggleMobileMenu: (arg: boolean | null) => void;
};
// the context which help to share the mobile menu state
export const MobileMenuContext = createContext<typeContextMobile | null>(null);

type Props = { children: React.ReactNode };

export const MobileMenuPovider = ({ children }: Props) => {
  // state to manage the showing of the mobile menu
  const [ShowMobileMenu, setShowMobileMenu] = useState(false);

  // a function to toggle the mobile menu state
  const toggleMobileMenu = function (arg: boolean | null = null) {
    //console.log(ShowMobileMenu);
    if (arg && typeof arg == "boolean") {
       setShowMobileMenu(arg);
    } else {
       setShowMobileMenu((prev) => !prev);
    }
    
  };

  const value: typeContextMobile = {
    ShowMobileMenu,
    toggleMobileMenu,
  };

  return (
    <MobileMenuContext.Provider value={value}>
      {children}
    </MobileMenuContext.Provider>
  );
};
