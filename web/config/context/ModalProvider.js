import React, { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(); // เซทว่าออนไลน์ยุไหม
  const [nameMember, setNameMember] = useState(); //ชื่อ display ของเจ้าของ
  const [dataMember, setDataMember] = useState(); //ข้อมูลของตนเอง
  const [dataFriend, setDataFriend] = useState(); // ข้อมูลค้นหาบน HTTP หรือ ไว้หาเพื่อน
  const [avatar, setAvatar] = useState('https://firebasestorage.googleapis.com/v0/b/myspace-dev-1ae9e.appspot.com/o/avatars%2Fresizes%2Fplaceholder-human-300x300_300x300.jpg?alt=media&token=13dcd961-f22c-4523-9bd1-9bd54b25a3fa'); // รูป avatar

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
        avatar,
        setAvatar,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
