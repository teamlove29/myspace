import React from 'react'
import { useRouter } from "next/router";
import MemberPage from '../../../container/memberPage'
export default function Index(props) {
    const router = useRouter();
    const { username } = router.query;
    return (
        <MemberPage test='true'>
           <div className="row container text-light mt-4">
           <h6>My Playlist</h6> <p className="ml-auto">+  Add playlist | View all playlist </p>
           </div>
        </MemberPage>
    )
}
