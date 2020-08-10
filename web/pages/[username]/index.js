import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import OverviewFriend from "../../container/firendPage/overview";
import Overview from "../../container/memberPage/overview";
import NotFound from "../../container/notFound";
import LoadPage from "../../container/loadPage";
import { ModalContext } from "../../config/context/ModalProvider";
import Axios from "axios";
export default function Index({ dataFriends }) {
  const router = useRouter();
  const { username } = router.query;
  const [statusEditor, setStatusEditor] = useState(false);
  const [editor, setEditor] = useState(null);
  const {
    nameMember,
    dataMember,
    setDataMember,
    setDataFriend,
    dataFriend,
    header,
  } = useContext(ModalContext);
  const verifyMember = username != nameMember ? false : true;

  useEffect(() => {
    if (dataFriends[0] && nameMember) {
      if (dataFriends[0].mem_display_name != nameMember) {
        setDataFriend(dataFriends[0]);
        setEditor(false);
      } else {
        setDataFriend(undefined);
      }
    } else {
      setDataFriend(undefined);
    }
  }, [username,nameMember]);

  // if (
  //   dataFriends === undefined ||
  //   dataMember === undefined ||
  //   nameMember === undefined
  // )
  //   return <LoadPage />;
  if (!dataFriends[0]) return <NotFound />;
  // if (verifyMember === false && dataFriends !== undefined) return <OverviewFriend />;

  return <>{<Overview  editor={statusEditor} />}</>;
}



export async function getServerSideProps({ query }) {
  const { username } = query;
  const friend = await Axios.post(process.env.API_URL_CHECKDISPLAY, {
    display_name: username,
  }).catch((err) => {
    return err;
  });

  return { props:{
    dataFriends: friend.data || {}
  } };
}
