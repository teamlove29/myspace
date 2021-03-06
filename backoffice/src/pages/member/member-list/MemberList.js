import React, { useEffect, useState, useMemo } from "react";
import { NavLink } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import { useHistory } from "react-router-dom";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import filterFactory, { selectFilter } from "react-bootstrap-table2-filter";
import axios from "axios";
import { Card } from "react-bootstrap";
import { Pagination } from "../../../_metronic/_partials/controls";
import members from "../../../data/member/member.json";

export default function MemberList() {
  const [member, setMember] = useState([]);
  const [err, setErr] = useState();
  const history = useHistory();
  const { SearchBar } = Search;

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => {
  //       console.log(response)
  //       // setMember(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //       setErr(err);
  //     });
  // }, []);

  const Avater = (row) => {
    const TextAvatar = row.substring(0, 1);
    return (
      <div class="symbol ">
        <span class="symbol-label font-size-h6">{TextAvatar}</span>
      </div>
    );
  };

  const actionButton = (row) => {
    return (
      <NavLink
        to={`/member/overview/${row}`}
        className="btn btn-sm btn-clean btn-icon "
      >
        <i class="flaticon2-gear"></i>
      </NavLink>
    );
  };

  const iconOnline = () => {
    return (
      <>
        <span class="label label-dot label-success"></span> Active
      </>
    );
  };

  const memberLogo = (row) => {
    return (
      <>
        {row === "artist" ? (
          <span class="label label-rounded label-warning label-pill label-inline mr-2">
            {row}
          </span>
        ) : (
          <span class="label label-rounded label-primary label-pill label-inline mr-2">
            {row}
          </span>
        )}
      </>
    );
  };

  // คลิกแล้วไปไหน
  const rowEvents = {
    onClick: (e, column, columnIndex, row, rowIndex) => {
      // console.log(row.id)
      // window.location.href=`/testPage/${row.id}`
      history.push(`/member/${row.id}`);
    },
  };

  const defaultSorted = [
    {
      dataField: "name",
      order: "ASC",
    },
  ];

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

  const selectOptions = {
    member: "Member",
    artist: "Artist",
  };

  const width70PX = {
    width: "70px",
  };

  const columns = [
    // { dataField: 'id', text: 'ID', classes: 'text-center align-middle', headerClasses: 'text-center' },
    {
      dataField: "name",
      text: "Avatar",
      classes: "",
      headerClasses: "",
      headerStyle: width70PX,
      formatter: Avater,
    },
    { dataField: "name", text: "Name", classes: "align-middle", sort: true },
    { dataField: "email", text: "Email", classes: "align-middle ", sort: true },
    { dataField: "phone", text: "Phone", classes: "align-middle ", sort: true },
    {
      dataField: "type",
      text: "",
      classes: "align-middle",
      formatter: memberLogo,
      align: "center",
      headerClasses: "text-center",
      filter: selectFilter({ options: selectOptions, defaultValue: null }),
    },
    {
      dataField: "status",
      text: "Status",
      formatter: iconOnline,
      classes: "text-center align-middle",
      headerClasses: "text-center",
      sort: true,
    },
    {
      dataField: "id",
      text: "Action",
      formatter: actionButton,
      // events: rowEvents,
      classes: "text-center align-middle",
      headerClasses: "text-center",
      headerStyle: width70PX,
    },
  ];

  return (
    <div className="container">
      <Card>
        <Card.Body>
          <ToolkitProvider
            keyField="id"
            data={members}
            columns={columns}
            search
          >
            {(props) => (
              <>
                <Card.Title>
                  <h3>Member List</h3>
                  <span className="d-block text-muted pt-2 font-size-sm">
                    Add row and group actions
                  </span>
                  <hr />
                </Card.Title>
                <SearchBar {...props.searchProps} />
                <br />
                <small className="text-muted">
                  {" "}
                  <b>Search</b> in all fields
                </small>

                <BootstrapTable
                  {...props.baseProps}
                  wrapperClasses="table-responsive"
                  classes="table table-sm table-head-custom table-vertical-center"
                  bootstrap4
                  // loading={true}
                  // overlay={ overlayFactory({ spinner: true, background: 'rgba(192,192,192,0.3)' }) }
                  keyField="id"
                  // ข้อมูลในตาราง
                  data={members === null ? [] : members}
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
  );
}
