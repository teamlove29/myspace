import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Overview from "../../container/memberPage/overview";
import ArtistPage from "../../container/artistPage";
import NotFound from "../../container/notFound";
import LoadPage from "../../container/loadPage";
import { ModalContext } from "../../config/context/ModalProvider";
import Axios from "axios";
export default function Index({ stars }) {
  const router = useRouter();
  const { username } = router.query;
  const [statusEditor, setStatusEditor] = useState(false);
  const { nameMember, dataMember, header, dataFriend } = useContext(
    ModalContext
  );
  const verifyMember = username != nameMember ? false : true;
  if (dataMember != undefined) {
    var type = dataMember.mem_type; // 1 member | 2 artist
  }
  const showPage = () => {
    if (nameMember === undefined || dataMember === undefined)
      return <LoadPage />;
    else {
      if (verifyMember === false && dataFriend === undefined)
        return <NotFound />;
      else {
        return (
          <>
            {verifyMember && type === 1 && (
              <Overview editor={statusEditor} />
            )}
            {verifyMember && type === 2 && (
              <ArtistPage editor={statusEditor} />
            )}
          </>
        );
      }
    }
  };
  // ถ้า nameMember != ชื่อที่กลับมาให้ setStatusEditor(true) คือการเปิดสถานะการแก้ไข
  return <>{showPage()}</>;
}

// Index.getInitialProps = async (ctx) => {
//   const res = await fetch('https://us-central1-myspace-dev-1ae9e.cloudfunctions.net/edit_font-profile',{
//     headers: { authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJxcDlmbTY0dWFQT0s1VmcyMmExVU5Gejk3Ym0yIiwiaWF0IjoxNTkzMTkwNjU3fQ.HdP-qlX9JK0JZlcRcsvJl6By4JEPFDCSJ0xVmoV17v4' }
//   })
//   const json = await res.json()
//   return { stars: json.stargazers_count }
// };

// export async function getStaticProps({ params }) {
//     // fetch data from CMS through params
//     const post = await getBlogItem(params.slug)
//     return {
//       props: {
//         post
//       }
//     }
//   }

// export async function getStaticPaths() {
//     return {
//       fallback: true,
//       paths: []
//     }
//   }

// ส่ง display fetch ข้อมูลลงมาเปรียบเทียบกับ display ใน context ถ้าตรง แปลว่าเป็นเจ้าของสามารถแก้ไขได้

// ถ้าไม่ตรงแปลว่าไม่ใช่เจ้าของ ให้แสดงข้อมูล แต่ส่งค่า false ไปแทนเพื่อป้องกันการแก้ไขข้อมูล
