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

  const {
    nameMember,
    dataMember,
    setDataFriend,
    dataFriend,
    header,
  } = useContext(ModalContext);
  const verifyMember = username != nameMember ? false : true;

  useEffect(() => {
    if (dataFriends) {
      setDataFriend(dataFriends);
    }
  }, []);

  console.log(verifyMember === false && dataFriends === undefined);

  if (dataFriends === undefined || dataMember === undefined)
    return <LoadPage />;
  if (verifyMember === false && dataFriends === undefined) return <NotFound />;
  if (verifyMember === false && dataFriends !== undefined)
    return <OverviewFriend />;

  return <>{verifyMember && <Overview editor={statusEditor} />}</>;
}

Index.getInitialProps = async ({ query, ctx }) => {
  const { username } = query;
  const friend = await Axios.post(process.env.API_URL_CHECKDISPLAY, {
    display_name: username,
  }).catch((err) => {
    return err;
  });

  return { dataFriends: friend.data[0] };
};
