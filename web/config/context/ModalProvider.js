import React, { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [username, setUserName] = useState();

  return (
    <ModalContext.Provider
      value={{
        user,setUser,
        username,setUserName,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
