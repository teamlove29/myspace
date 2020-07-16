import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
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

  // console.log(header.authorization)
  //   Axios.post('https://us-central1-myspace-dev-1ae9e.cloudfunctions.net/edit_front-profile/checkDisplay', {
  //     headers: {authorization : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJEUDJyUnVWSnlaYTBkMnZObUlHT1ozVUZhS0EzIiwiaWF0IjoxNTkzNjcyNzc3fQ.6Fv1zwIlL0HQNwNo6PPiVxZUNxSpLYRUgIxeDVUYATk'},
  //     // display: 'team_happy29',
  //   })
  // .then((res) => {
  //   console.log(res);
  // })
  // .catch((err) => {
  //   console.log(err);
  // });
  // console.log(test)

  useEffect(() => {
    // Axios.post(
    //   process.env.API_URL_CHECKDISPLAY,
    //   {
    //     display: username,
    //   },
    //   { headers: { authorization: header } }
    // )
    //   .then((res) => {
    //     if (res.data[0].mem_display_name === nameMember)
    //       setDataFriend(res.data);
    //     else setDataFriend(undefined);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setDataFriend(undefined);
    //   });
  }, [username]);

  const verifyMember = username != nameMember ? false : true;

  if (dataMember != undefined) {
    var type = dataMember.mem_type; // 1 member | 2 artist
  }
  const showPage = () => {
    if (nameMember === undefined || dataMember === undefined)
      return <LoadPage />;
    if (verifyMember === false && dataFriend === undefined) return <NotFound />;
    else {
      return <>{verifyMember && <Overview editor={statusEditor} />}</>;
    }
  };
  // ถ้า nameMember != ชื่อที่กลับมาให้ setStatusEditor(true) คือการเปิดสถานะการแก้ไข
  return <>{showPage()}</>;
}

