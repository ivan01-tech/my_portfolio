"use client";

import { ModalContext } from "@/app/Context/ModalContext";
import { useContext } from "react";

export function useModal() {
  return useContext(ModalContext);
}    
