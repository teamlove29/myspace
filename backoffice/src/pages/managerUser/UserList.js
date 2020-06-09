import React,{ useEffect, useState } from 'react'
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import filterFactory, { selectFilter } from "react-bootstrap-table2-filter";
import { NavLink } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import Axios from 'axios'
import users from "../../data/music/member.json";
export default function ManagerUser() {
    const [user, setUser] = useState([]);
    const [err, setErr] = useState();
    const history = useHistory();
    const { SearchBar } = Search;

//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         console.log(response)
//         setUsers(response.data);
//       })
//       .catch((err) => {
//         console.log(err)
//         setErr({ err: err });
//       });
//   }, []);

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


    const actionButton = (row) => {
        return (
            <>
          <NavLink
            to={`/manager/user/edit/${row}`}
            className="btn btn-sm btn-clean btn-icon ">
            <i class="flaticon-edit"></i>
          </NavLink>
          <NavLink 
            to={`/manager/user/del/${row}`}
            className="btn btn-sm btn-clean btn-icon ">
            <i class="flaticon2-rubbish-bin-delete-button"></i>
          </NavLink>
            </>
        );
      };

      const selectOptions = {
        admin: "Admin",
      };

      const showType = () => {
        return(
          <>
          admin
          </>
        )
      }

      const showStatus = () => {
        return(
          <>
          Active
          </>
        )
      }



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
          dataField: "username",
          text: "Status",
          formatter: showStatus,
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
          headerStyle: '',
        },
      ];

      const selectRow = {
        mode: 'checkbox',
        clickToSelect: true,
        selected:'',
        onSelect: '',
        onSelectAll: ''
      };

const handleClick = () => {
  console.log('dasadasd')
}
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
              <h3 className="card-label">Users List
              <span className="d-block text-muted pt-2 font-size-sm">row selection and group actions</span></h3>
              </Card.Title>
                <hr />
                <small className="text-muted">
                  {" "}
                  <b>Search</b> in all fields
                </small> <br/>
                <SearchBar {...props.searchProps} />
        <br/>
                <button 
                className="btn btn-danger btn-sm "
                onClick={() => handleClick() }> Delect All </button>
                <BootstrapTable
                  {...props.baseProps}
                  wrapperClasses="table-responsive"
                  classes="table table-sm table-head-custom table-vertical-center"
                  bootstrap4
                  selectRow={ selectRow }
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
    )
}
