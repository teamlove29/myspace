import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Member from '../../container/memberPage'
import ArtistPage from '../../container/artistPage'
import NotFound from '../../container/notFound';
import { ModalContext } from "../../config/context/ModalProvider";
export default function Index() {
  const router = useRouter();
  const { username } = router.query;
  const { nameMember, setNameMember } = useContext(ModalContext);
return(
    <>
<Member  name={username} />
{/* <ArtistPage  name={username} /> */}
{/* <NotFound /> */}
    </>
)
}

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

