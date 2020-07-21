import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import MenuSetting from "../../../component/menuSetting";
import { ModalContext } from "../../../config/context/ModalProvider";
import NewAddress from "../../../component/modal/newAddress";
import { Button } from "../../../component/modal/style";

export default function MyAddress() {
  const router = useRouter();
  const { username } = router.query;
  const { nameMember } = useContext(ModalContext);
  const [showNewAddress, setShowNewAddress] = useState(false);
  const [editor, setEditor] = useState(false);

  const handleNewImage = (e) => {
    if (e.target.files[0] != "") {
      const fileSize = e.target.files[0].size / 1024 / 1024; // in MB
      if (fileSize > 10) {
        alert("File size exceeds 10 MB");
      } else {
        setImageURL(e.target.files[0]);
        setEditing(true);
      }
    }
  };

  const handleNewAddress = (value) => {
    if (value != 'edit') {
      setShowNewAddress(true);
      setEditor(false);
    } else {
      setShowNewAddress(true);
      setEditor(true);
    }
    setTimeout(() => {
      setShowNewAddress(false);
    }, 50);
  };

  return (
    <>
      <NewAddress show={showNewAddress} editor={editor} />
      <MenuSetting>
        <div className="row container col-md-auto text-light mt-5">
          <h5 className="font-Medium">My Addresses</h5>{" "}
          <div
            onClick={handleNewAddress}
            className="ml-auto  btn btn-sm btn-warning text-light"
          >
            + Add New Address
          </div>
        </div>
        <hr />
        <div className="row container text-light mt-5">
          <div className="col-10 ">
            <div className="form-group row">
              <div className="col-sm-2 text-muted">Fullname</div>
              <div className="col-sm-10">Eva Mendes</div>
            </div>

            <div className="form-group row">
              <div className="col-sm-2 text-muted">Phone</div>
              <div className="col-sm-10">317-781-8654</div>
            </div>

            <div className="form-group row">
              <div className="col-sm-2 text-muted">Address</div>
              <div className="col-sm-10">
              7BSF549 - issued in California (CA) in year 2013
              </div>
            </div>
          </div>
          <div className="col-2 row">
            <div className="  ml-auto">
              <a
                onClick={() => handleNewAddress("edit")}
                className="mr-2 text-light pointer"
              >
                Edit
              </a>
              <a className="mr-2 text-light" href="#">
                Delete
              </a>
            </div>
          </div>
        </div>
      </MenuSetting>
      <style jsx>
        {`
          hr {
            margin-bottom: 50px;
            margin-top: 20px;
            background-color: #282828;
          }
        `}
      </style>
    </>
  );
}
