"use client";

import React, { createContext, useState } from "react";

export type typeContext = {
  ShowModal: boolean;
  toggleModal: (arg: boolean | null) => void;
};

// the context which help to share the modal  state
export const ModalContext = createContext<typeContext | null>(null);

type Props = { children: React.ReactNode };

export const ModalProvider = ({ children }: Props) => {
  // state to manage the showing of the modal 
  const [ShowModal, setShowModal] = useState(false);

  // a function to toggle the modal  state
  const toggleModal = function (arg: boolean | null = null) {
    //console.log(ShowModal);
    if (arg && typeof arg == "boolean") {
       setShowModal(arg);
    } else {
       setShowModal((prev) => !prev);
    }
    
  };

  const value: typeContext = {
    ShowModal,
    toggleModal,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
};
