import React, { useState, useEffect } from "react";
import {
  Card,
  ListGroup,
  InputGroup,
  FormControl,
  Button,
  Form,
} from "react-bootstrap";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import filterFactory, { selectFilter } from "react-bootstrap-table2-filter";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import genresData from "../../data/music/genres.json";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Index() {
  //   const genres = genresData.genres;
  const { SearchBar } = Search;
  const MySwal = withReactContent(Swal);
  const [err, setErr] = useState('');
  const [genres, setGenres] = useState([]);
  const [state, setState] = useState({ name: "" });

  useEffect(() => {
    setGenres(genresData);
  }, []);
  // const listItems = currentPost.map((value, index) => {
  //   return (
  //     <>
  //       <ListGroup.Item key={index}>
  //         {value}
  //         <a
  //           onClick={() => {
  //             handleDel(value);
  //           }}
  //           className="btn-sm float-right"
  //         >
  //           <i class="flaticon2-cancel text-danger"></i>
  //         </a>
  //       </ListGroup.Item>
  //     </>
  //   );
  // });

  const handleSubmit = (event) => {
    event.preventDefault();
    const checkgenre = genres.filter((v) => v.name === state.name )
    if (state != "" && checkgenre.length === 0) {
      setGenres([{ name: state.name }, ...genres]);
      setErr('')
    }
    else setErr('Duplicates')

    setState({ name: "" });
  };
  const handleChange = (e) => {
    const inputGenre = e.target.value;
    setState({ name: inputGenre });
  };
  const handleDel = (value) => {
    MySwal.fire({
      position: "top",
      icon: "question",
      title: <h1 className="display-5">Are you sure ?</h1>,
      text: "Are you sure you want to delete data ?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, edit it!",
    }).then((result) => {
      if (result.value) {
        setGenres(genres.filter((v) => v.name != value));
      }
    });
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

  const Listname = (value) => {
    return (
      <>
        {value}
        <a onClick={() => handleDel(value)} className="btn-sm float-right">
          <i class="flaticon2-cancel text-danger"></i>
        </a>
      </>
    );
  };

  const defaultSorted = [
    {
      dataField: "id",
      order: "desc",
    },
  ];

  const columns = [
    {
      dataField: "name",
      text: "Name",
      classes: "align-middle",
      sort: true,
      formatter: Listname,
    },
  ];

  return (
    <div className="container" >
      <Card>
        <Card.Body>
          <ToolkitProvider keyField="id" data={genres} columns={columns} search>
            {(props) => (
              <>
                <Card.Title>
                  <h3>Genre list </h3>
                  <span className="d-block text-muted pt-2 font-size-sm">
                    Add row and group actions
                  </span>
                </Card.Title>
                {err != '' ?
                  <div class="alert alert-danger" role="alert">
                    {err}
                  </div>
                  : null}
                <Form className="mt-5" onSubmit={handleSubmit}>
                  <InputGroup
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    className="mb-5"
                  >
                    <FormControl
                      value={state.name}
                      placeholder="Add genre..."
                      aria-label="Add genre"
                      aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                      <Button type="submit" variant="outline-secondary">
                        Add
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Form>
                <hr />
                <SearchBar {...props.searchProps} />
                <br />
                <small className="text-muted">
                  <b>Search</b> in all fields
                </small>
                <br />
                <BootstrapTable
                  {...props.baseProps}
                  wrapperClasses="table-responsive"
                  classes="table table-head-custom table-vertical-center mt-5"
                  bootstrap4
                  keyField="id"
                  data={genres === null ? [] : genres}
                  columns={columns}
                  noDataIndication={dataEmpty}
                  filter={filterFactory()}
                  pagination={paginationFactory()}
                  defaultSorted={defaultSorted}
                // bordered={false}
                />
              </>
            )}
          </ToolkitProvider>
        </Card.Body>
      </Card>
    </div>
  );
}
