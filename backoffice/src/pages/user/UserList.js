import React, { useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";
import { useHistory, Redirect } from "react-router-dom";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import filterFactory, { selectFilter } from "react-bootstrap-table2-filter";
import { NavLink } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import Axios from "axios";
import users from "../../data/member/member.json";
import AddUser from './AddUser'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import firebase from "../../config/config";

export default function ManagerUser() {
  const MySwal = withReactContent(Swal);
  const [user, setUser] = useState();
  const [err, setErr] = useState();
  const [select, setSelect] = useState([]);
  const history = useHistory();
  const { SearchBar } = Search;

  useEffect(() => {
    // axios.get('https://example.com/getSomething', {
    //   headers: { Authorization: token }
    //  })
  }, []);
  const handleOnSelect = (row, isSelect) => {
    if (isSelect) {
      setSelect([...select, row.id]);
    } else {
      setSelect(select.filter((x) => x !== row.id));
    }
    console.log(select);
  };

  const handleOnSelectAll = (isSelect, rows) => {
    const ids = rows.map((r) => r.id);
    if (isSelect) {
      setSelect(ids);
    } else {
      setSelect([]);
    }
  };

  const dataEmpty = () => {
    return (
      <>
        <button
          type="button"
          class="btn btn-outline-secondary spinner spinner-darker-dark spinner-right mt-5"
        >
          Loading ...
        </button>
      </>
    );
  };

  const deluser = () => {
    MySwal.fire({
      position:'top',
      icon: "warning",
      title: <h1 className="display-5">Are you sure ?</h1>,
      text: "Are you sure you want to delete ?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      // Result.value after click yes
      if (result.value) {
        Swal.fire({
          position:'top',
          icon: "success",
          title: "Deleted",
          text: "Your file has been deleted.",
          showConfirmButton: false,
        });
      }
    });
  };

  const actionButton = (row) => {
    return (
      <>
      

      <button
          onClick={() => history.push(`/manager/user/edit/${row}`)  }
          className="btn btn-sm btn-clean btn-icon "
        >
          <i class="flaticon-edit text-warning"></i>
        </button>
        <button
          onClick={() => deluser()}
          className="btn btn-sm btn-clean btn-icon "
        >
          <i class="flaticon2-rubbish-bin-delete-button text-danger"></i>
        </button>
      </>
    );
  };

  const selectOptions = {
    admin: "Admin",
  };

  const showType = () => {
    return <p>Administrator</p>;
  };

  const columns = [
    { dataField: "name", text: "Username", classes: "align-middle ", sort: true },
    { dataField: "email", text: "Email", classes: "align-middle ", sort: true },
    {
      dataField: "username",
      text: "Role",
      classes: "align-middle",
      formatter: showType,
      align: "center",
      headerClasses: "text-center",
      sort: true 
    },
    {
      dataField: "id",
      text: "Action",
      formatter: actionButton,
      // events: rowEvents,
      classes: "text-center align-middle",
      headerClasses: "text-center",
      headerStyle: "",
    },
  ];

  const selectRow = {
    mode: "checkbox",
    // clickToSelect: true,
    selected: select,
    onSelect: handleOnSelect,
    onSelectAll: handleOnSelectAll,
  };

  const handleClick = () => {
    console.log("dasadasd");
  };
  return (
    <div>
      <div className="container ">
        <Card>
          <Card.Body>
            <ToolkitProvider
              keyField="id"
              data={users}
              columns={columns}
              search
            >
              {(props) => (
                <>
                  <Card.Title>
                    <div className="row">
                      <div className="col-6">
                        <h3 className="card-label">
                          Users List
                          <span className="d-block text-muted pt-2 font-size-sm">
                            row selection and group actions
                          </span>
                        </h3>
                      </div>
                      <div className="col-6 text-right">
                        <button 
                        onClick={() => history.push('/manager/user/add')}
                        className="btn btn-primary">
                          <span className="svg-icon svg-icon-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <polygon points="0 0 24 0 24 24 0 24" />
                                <path
                                  d="M18,8 L16,8 C15.4477153,8 15,7.55228475 15,7 C15,6.44771525 15.4477153,6 16,6 L18,6 L18,4 C18,3.44771525 18.4477153,3 19,3 C19.5522847,3 20,3.44771525 20,4 L20,6 L22,6 C22.5522847,6 23,6.44771525 23,7 C23,7.55228475 22.5522847,8 22,8 L20,8 L20,10 C20,10.5522847 19.5522847,11 19,11 C18.4477153,11 18,10.5522847 18,10 L18,8 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
                                  fill="#000000"
                                  fillRule="nonzero"
                                  opacity="0.3"
                                />
                                <path
                                  d="M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                                  fill="#000000"
                                  fillRule="nonzero"
                                />
                              </g>
                            </svg>
                          </span>
                          New User
                        </button>
                      </div>
                    </div>
                  </Card.Title>
                  <hr />
                  <br />
                  <SearchBar {...props.searchProps} />
                  <br />
                  <small className="text-muted">
                    {" "}
                    <b>Search</b> in all fields
                  </small>{" "}
                  <br />
                  {select.length > 1 ? (
                    <button
                      onClick={() => deluser()}
                      className="btn btn-sm btn-danger mt-5 mb-5"
                    >
                      Delete All Select
                    </button>
                  ) : null}
                  <br />
                  {/* <button 
                className="btn btn-danger btn-sm "
                onClick={() => handleClick() }> Delete All </button> */}
                  <BootstrapTable
                    {...props.baseProps}
                    wrapperClasses="table-responsive"
                    classes="table table-head-custom table-vertical-center "
                    bootstrap4
                    selectRow={selectRow}
                    // loading={true}
                    // overlay={ overlayFactory({ spinner: true, background: 'rgba(192,192,192,0.3)' }) }
                    keyField="id"
                    // ข้อมูลในตาราง
                    data={users === null ? [] : users}
                    // รูปแบบตาราง
                    columns={columns}
                    bordered={false}
                    // ค่าเริ่มต้นให้ DESC หรือ ASC ตามที่กำหนด
                    // defaultSorted={defaultSorted}

                    // ถ้าค่าว่างให้ทำการ...
                    noDataIndication={dataEmpty}
                    // กรองข้อมูล
                    filter={filterFactory()}
                    // ตัวเลื่อนหน้า
                    pagination={paginationFactory()}
                  />
                </>
              )}
            </ToolkitProvider>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
