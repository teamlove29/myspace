import React, { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(); // เซทว่าออนไลน์ยุไหม
  const [nameMember, setNameMember] = useState(); //ชื่อ display ของเจ้าของ
  const [dataMember, setDataMember] = useState(); //ข้อมูลของตนเอง
  const [dataFriend, setDataFriend] = useState(); // ข้อมูลค้นหาบน HTTP หรือ ไว้หาเพื่อน
  const [imageBlobCover, setImageBlobCover] = useState(null); // ข้อมูลค้นหาบน HTTP หรือ ไว้หาเพื่อน
  const [avatarMember, setavatarMember] = useState(process.env.AVATARHOLDER);
  const [coverMember, setcoverMember] = useState();
  const [header, setHeader] = useState();
  const [activeMenu, setActiveMenu] = useState();
  const [Xposition, setXposition] = useState();
  const [Yposition, setYposition] = useState();
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
        imageBlobCover,
        setImageBlobCover,
        avatarMember,
        setavatarMember,
        coverMember,
        setcoverMember,
        activeMenu,
        setActiveMenu,
        Xposition,
        setXposition,
        Yposition,
        setYposition,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
