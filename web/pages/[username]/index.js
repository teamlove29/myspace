import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import OverviewFriend from "../../container/firendPage/overview";
import Overview from "../../container/memberPage/overview";
import NotFound from "../../container/notFound";
import LoadPage from "../../container/loadPage";
import { ModalContext } from "../../config/context/ModalProvider";
import Axios from "axios";
export default function Index({ stars }) {
  const router = useRouter();
  const { username } = router.query;
  const [statusEditor, setStatusEditor] = useState(false);

  const {
    nameMember,
    dataMember,
    setDataFriend,
    dataFriend,
    header,
  } = useContext(ModalContext);
  const verifyMember = username != nameMember ? false : true;
  useEffect(() => {
    Axios.post(
      process.env.API_URL_CHECKDISPLAY,
      {
        display_name: username,
      }
      // {
      //   headers: {
      //     authorization:
      //     header
      //   },
      // }
    )
      .then((res) => {
        if (res.data[0].mem_display_name != nameMember)
          setDataFriend(res.data[0]);
        else setDataFriend(undefined);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [username]);

console.log(nameMember === undefined || dataMember === undefined)
  const showPage = () => {

      if (verifyMember === false && dataFriend === undefined) {
        if (nameMember === undefined || dataMember === undefined)      return <LoadPage />;
        return <NotFound />;
    }
    if (dataFriend != undefined) {
      // return <OverviewFriend />;
    } else {
      return <>{verifyMember && <Overview editor={statusEditor} />}</>;
    }
  };
  // ถ้า nameMember != ชื่อที่กลับมาให้ setStatusEditor(true) คือการเปิดสถานะการแก้ไข
  return <>{showPage()}</>;
}
