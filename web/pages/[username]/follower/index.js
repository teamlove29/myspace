import React from "react";
import { useRouter } from "next/router";
import MemberPage from "../../../container/memberPage";
const Index = () => {
  const router = useRouter();
  const { username } = router.query;
  return (
    <MemberPage>
      <div className="row container-fluid col-md-auto text-light mt-4">
        <h6 className="font-Medium">Following (3)</h6>{" "}
        <form className="ml-auto d-sm-inline-block form-inline navbar-search ">
          <div className="input-group w-100 b">
            <input
              style={{ borderRadius: "100px" }}
              type="text"
              className="form-control border-0 small"
            />
          </div>
        </form>
      </div>
      {/* begin 1 */}
      <div className="row mt-5 container-fluid justify-content-center">
        <div className="col-auto my-auto">
          <img
            className="rounded-circle "
            src="https://source.unsplash.com/6vh6D_8ZzmQ/75x75"
            alt=""
          />
        </div>
        <div className="col-8 my-auto">
          <span className="text-light">Mememay</span>
          <p className="text-muted">เสียงเพลงช่วยทำให้เราอารมณ์ดี</p>
        </div>
        <div className="col-2 my-auto ml-auto">
          <button
            style={{ borderRadius: "100px", fontSize: "13px" }}
            className="btn btn-outline-light pr-4 pl-4 p-2"
          >
            Following
          </button>
        </div>
      </div>
      {/* end 1 */}
      <hr />
      {/* begin 2 */}
      <div className="row container-fluid justify-content-center">
        <div className="col-auto my-auto">
          <img
            className="rounded-circle "
            src="https://source.unsplash.com/Xi0SAAHOc-k/75x75"
            alt=""
          />
        </div>
        <div className="col-8 my-auto">
          <span className="text-light">Mememay</span>
          <p className="text-muted">เสียงเพลงช่วยทำให้เราอารมณ์ดี</p>
        </div>
        <div className="col-2 my-auto ml-auto">
          <button
            style={{ borderRadius: "100px", fontSize: "13px" }}
            className="btn btn-outline-light pr-4 pl-4 p-2"
          >
            Following
          </button>
        </div>
      </div>
      {/* end 2 */}
      <hr />
      {/* begin 3 */}
      <div className="row  container-fluid justify-content-center">
        <div className="col-auto my-auto">
          <img
            className="rounded-circle "
            src="https://source.unsplash.com/5KD__4bgtnA/75x75"
            alt=""
          />
        </div>
        <div className="col-8 my-auto">
          <span className="text-light">Mememay</span>
          <p className="text-muted">เสียงเพลงช่วยทำให้เราอารมณ์ดี</p>
        </div>
        <div className="col-2 my-auto ml-auto">
          <button
            style={{ borderRadius: "100px", fontSize: "13px" }}
            className="btn btn-outline-light pr-4 pl-4 p-2"
          >
            Following
          </button>
        </div>
      </div>
      {/* end 3 */}

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
