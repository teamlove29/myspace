import React, { useContext } from "react";
import NotFound from "./notFound";
import { useRouter } from "next/router";
import { ModalContext } from "../config/context/ModalProvider";
export default function verifyMember({ children,data }) {
    const router = useRouter();
    const { username } = router.query;
  const { dataFriend,dataMember } = useContext(ModalContext);
  if (dataMember.mem_display_name != username) {
    return <NotFound />;
  } else {
    return (
      <>

        {children}
      </>
    );
  }
}

