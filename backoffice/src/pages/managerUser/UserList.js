import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import filterFactory, { selectFilter } from "react-bootstrap-table2-filter";
import { NavLink } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import Axios from "axios";
import users from "../../data/music/member.json";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import firebase from "../../config/config";

export default function ManagerUser() {
  const MySwal = withReactContent(Swal);
  const [user, setUser] = useState();
  const [err, setErr] = useState();
  const [select, setSelect] = useState([1, 2]);
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
        <NavLink
          to={`/manager/user/edit/${row}`}
          className="btn btn-sm btn-clean btn-icon "
        >
          <i class="flaticon-edit text-warning"></i>
        </NavLink>
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
    return <>Administrator</>;
  };

  const columns = [
    // { dataField: 'id', text: 'ID', classes: 'text-center align-middle', headerClasses: 'text-center' },
    { dataField: "name", text: "Name", classes: "align-middle", sort: true },
    { dataField: "email", text: "Email", classes: "align-middle ", sort: true },
    { dataField: "phone", text: "Phone", classes: "align-middle ", sort: true },
    {
      dataField: "username",
      text: "Type",
      classes: "align-middle",
      formatter: showType,
      align: "center",
      headerClasses: "text-center",
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
    clickToSelect: true,
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
                    <h3 className="card-label">
                      Users List
                      <span className="d-block text-muted pt-2 font-size-sm">
                        row selection and group actions
                      </span>
                    </h3>
                  </Card.Title>
                  <hr />
                  <small className="text-muted">
                    {" "}
                    <b>Search</b> in all fields
                  </small>{" "}
                  <br />
                  <SearchBar {...props.searchProps} />
                  <br />
                  {select.length > 1 ? (
                    <button
                      onClick={() => deluser()}
                      className="btn btn-sm btn-danger mt-2 mb-2"
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
