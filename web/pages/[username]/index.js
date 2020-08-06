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
  const [data, setData] = useState(null);
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
    if (dataFriends) {
      if (dataFriends[0].mem_display_name != nameMember) {
        setDataFriend(dataFriends[0]);
        setData(dataFriends[0]);
      } else {
        setDataFriend(undefined);
      }
    } else {
      setDataFriend(undefined);
    }
  }, [username]);

  // if (
  //   dataFriends === undefined ||
  //   dataMember === undefined ||
  //   nameMember === undefined
  // )
  //   return <LoadPage />;
  if (!dataFriends) return <NotFound />;
  // if (verifyMember === false && dataFriends !== undefined) return <OverviewFriend />;

  return <>{<Overview data={data} editor={statusEditor} />}</>;
}

Index.getInitialProps = async ({ query, ctx }) => {
  const { username } = query;
  const friend = await Axios.post(process.env.API_URL_CHECKDISPLAY, {
    display_name: username,
  }).catch((err) => {
    return err;
  });

  return { dataFriends: friend.data };
};
