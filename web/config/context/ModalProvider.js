import React, { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [nameMember, setNameMember] = useState();

  return (
    <ModalContext.Provider
      value={{
        user,setUser,
        nameMember,setNameMember,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
