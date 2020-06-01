import React, { useEffect, useState, useMemo } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { useHistory } from "react-router-dom";
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import axios from 'axios';
import {
  Table,
  Card,

} from 'react-bootstrap';
export default function TestPage() {

  const [products, setProduct] = useState([]);
  const [err, setErr] = useState();
  const history = useHistory();
  const { SearchBar } = Search;

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        setProduct(response.data)
      })
      .catch(err => {
        setErr({ err: err })
      })
  }, [])



  const Avater = (row) => {
   
    const TextAvatar = row.substring(0,1)
    return (

      <div class="symbol ">
        <span class="symbol-label font-size-h5">{TextAvatar}</span>
    </div>
  
    )
  }

  const LookMember = () => {
    return (
      <button  className="btn btn-sm btn-clean btn-icon">
        <i class="flaticon2-gear"></i>
      </button>
    );
  }

  const iconOnline = () => {
    return (
      <>
        <span class="label label-dot label-success"></span> online
      </>
    );
  }

  const memberLogo = () => {
    return (
      <>
        <span class="label label-rounded label-primary label-pill label-inline mr-2">member</span>
      </>
    )
  }

// คลิกแล้วไปไหน 
  const rowEvents = {
    onClick: (e, column, columnIndex, row, rowIndex) => {
      // console.log(row.id)
      // window.location.href=`/testPage/${row.id}`
      history.push(`/testPage/${row.id}`)
    }
  };

  const defaultSorted = [{
    dataField: 'name',
    order: 'ASC'
  }];

  const dataEmpty = () => {
    return(
      <>
      <h3 className="text-center pt-5 mt-5">Table is Empty</h3>
      </>
    )
  }

  const columns = [
    // { dataField: 'id', text: 'ID', classes: 'text-center align-middle', headerClasses: 'text-center' ,sort: true},
    { dataField: 'name', text: 'Avatar', classes: '', formatter: Avater, headerClasses: '' },
    { dataField: 'name', text: 'Name', classes: 'align-middle' ,sort: true},
    { dataField: 'email', text: 'Email', classes: 'align-middle ' ,sort: true},
    { dataField: 'phone', text: 'Phone', classes: 'align-middle ' ,sort: true},
    { dataField: 'type', text: 'Type',classes:'align-middle' ,formatter: memberLogo, align: 'center', headerClasses: 'text-center' ,sort: true},
    { dataField: 'status', text: 'Status', formatter: iconOnline, classes: 'text-center align-middle', headerClasses: 'text-center' ,sort: true},
    { dataField: 'action', text: 'Action', formatter: LookMember, events: rowEvents, classes: 'text-center align-middle', headerClasses: 'text-center' },
  ]



  return (
    <div className="container">
      <Card >
        <Card.Body>

          <ToolkitProvider
            keyField="id"
            data={products}
            columns={columns}
            search>
            {props => (
                <div>
                  <h3>Member testPage </h3>
                  <hr />
                  <SearchBar {...props.searchProps} />
                  <BootstrapTable
                    {...props.baseProps}
                    classes="table-sm"
                    loading={true}
                    keyField='id'
                    data={products}
                    columns={columns}
                    bordered={ false }
                    defaultSorted={ defaultSorted } 
                    noDataIndication={dataEmpty}
                    pagination={paginationFactory()}
                    
                  />
                </div>
              )
            }
          </ToolkitProvider>
        </Card.Body>

      </Card>




    </div>
  )
}
