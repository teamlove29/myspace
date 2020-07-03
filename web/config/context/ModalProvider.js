import React, { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(); // เซทว่าออนไลน์ยุไหม
  const [nameMember, setNameMember] = useState(); //ชื่อ display ของเจ้าของ
  const [dataMember, setDataMember] = useState(); //ข้อมูลของตนเอง
  const [dataFriend, setDataFriend] = useState(); // ข้อมูลค้นหาบน HTTP หรือ ไว้หาเพื่อน

  const [header, setHeader] = useState();
  return (
    <ModalContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        nameMember,
        setNameMember,
        dataMember,
        setDataMember,
        header,
        setHeader,
        dataFriend,
        setDataFriend,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
