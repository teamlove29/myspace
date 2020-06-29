import React from "react";
import { useRouter } from "next/router";
import MemberPage from "../../../container/memberPage";
const Index = () => {
  const router = useRouter();
  const { username } = router.query;
  return (
    <MemberPage>
      <div className="row container-fluid col-md-auto text-light mt-4 ">
        <h6 className="font-Medium my-auto">Shoutbox</h6>
      </div>
<div className="row">
    <div className="col-6">
    <form action="#">
        <textarea
          className="mt-4 "
          placeholder="มีอะไรเกิดขึ้นบ้าง..."
          name="comment"
          id="comment"
          cols="50"
          rows="5"
        ></textarea>

        <p className="text-muted">Cancle</p>
        <button className="btn btn-outline-light">Send</button>
      </form>
      <hr/>

    </div>
    <div className="col-6">
        <p className="h6 text-light">You may also like</p>
    </div>
</div>

      <style jsx>{`

      hr{
          margin-bottom:25px;
          margin-top:25px;
        background-color:#282828}}
      }

      `}</style>
    </MemberPage>
  );
};

export default Index;
