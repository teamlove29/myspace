import React, { useState, useEffect, useContext, useMemo } from "react";
import { useRouter } from "next/router";
import Axios from "axios";
import NotFound from "./notFound";
import LoadPage from "./loadPage";
import { ModalContext } from "../config/context/ModalProvider";

export default function VerifyMember({ children, dataFriends }) {
  const router = useRouter();
  const { username } = router.query;
  const {
    nameMember,
    dataMember,
    setDataMember,
    setDataFriend,
    dataFriend,
    header,
  } = useContext(ModalContext);
  const [statusEditor, setStatusEditor] = useState(false);
  const [data, setData] = useState(null);
  const verifyMember = username != nameMember ? false : true;


//   useMemo(async () => {
  
 
//   }, []);

  //   if (
  //     dataFriends === undefined ||
  //     dataMember === undefined ||
  //     nameMember === undefined
  //   )
  //     return <LoadPage />;
  //   if (!dataFriends) return <NotFound />;

  //   if (dataMember.mem_display_name != username) {
  //     return <NotFound />;
  //   } else {
  //     return <>{children}</>;
  //   }

  return <>{children}</>;
}
