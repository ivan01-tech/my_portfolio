"use client";

import { MobileMenuContext } from "@/app/Context/MobileMenu";
import { useContext } from "react";

export function useMobile() {
  return useContext(MobileMenuContext);
}
