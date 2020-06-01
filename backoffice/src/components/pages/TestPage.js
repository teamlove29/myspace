import React, { useEffect, useState ,useMemo} from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from "react-bootstrap-table2-paginator";
import { useHistory } from "react-router-dom";
import overlayFactory from 'react-bootstrap-table2-overlay';
import axios from 'axios';
import {
  Table,
  Card,

} from 'react-bootstrap';
export default  function  TestPage  () {

  const [products, setProduct] = useState([]);
  const [err, setErr] = useState();
  const history = useHistory();

  useEffect(()  => {
     axios.get("https://jsonplaceholder.typicode.com/photos")
    .then( response => {
         setProduct(response.data) 
    })
    .catch(err => {
      setErr({err:err})
    })
  }, [])

 
  const rowEvents  =  {
    onClick: (e, column, columnIndex, row, rowIndex) => {
      console.log(row.id)
      // window.location.href=`/testPage/${row.id}`
      history.push(`/testPage/${row.id}`)
    }
  };

  const columns = [
    { dataField: 'id', text: 'Id' },
    { dataField: 'title', text: 'Name' ,events: rowEvents ,classes: 'text-danger poiter'},
    { dataField: 'url', text: 'Animal' },
  ]





  return (
    <div className="container">
      <Card >
        <Card.Body>

          <BootstrapTable
           classes="table table-hover" 
           loading={ true } 
           keyField='id' 
           data={products} 
           columns={columns} 
          //  overlay={ overlayFactory() }
           pagination={paginationFactory()}
            />

        </Card.Body>

      </Card>




    </div>
  )
}
