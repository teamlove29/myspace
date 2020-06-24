import React from "react";
import { useRouter } from "next/router";
import Member from '../../container/memberPage'
import ArtistPage from '../../container/artistPage'
export default function Index() {
  const router = useRouter();
  const { username } = router.query;
return(
    <>
<Member  name={username} />
{/* <ArtistPage  name={username} /> */}

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