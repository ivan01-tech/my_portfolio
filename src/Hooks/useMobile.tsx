"use client";

import { MobileMenuContext } from "@/Context/MobileMenu";
import { useContext } from "react";


export function useMobile() {
  return useContext(MobileMenuContext);
}    
