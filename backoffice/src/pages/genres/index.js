import React, { useState, useEffect } from "react";
import {
  Card,
  ListGroup,
  InputGroup,
  FormControl,
  Button,
  Form,
} from "react-bootstrap";
import genresData from "../../data/music/genres.json";
import { set } from "object-path";
export default function Index() {
  //   const genres = genresData.genres;

  const [genres, setGenres] = useState(["Rock", "Pop", "EDM"]);
  const [state, setState] = useState("");

  const listItems = genres.map((value,index) => {
    return (
      <>
        <ListGroup.Item key={index}>
          {value}
          <a
            onClick={() => {
              handleDel(value);
            }}
            className="btn-sm float-right"
          >
             <i class="flaticon2-cancel text-danger"></i>
          </a>
         
          
        </ListGroup.Item>
      </>
    );
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (state != "") setGenres([ state, ...genres]);
    setState("");
  };
  const handleChange = (e) => {
    const inputGenre = e.target.value;
    setState(inputGenre);
  };
  const handleDel = (value) => {
    setGenres(genres.filter((v) => v != value));
  };

  return (
    <div className="container">
      <Card style={{ width: "35rem" }}>
      <Card.Body>
      <h1>Genre list </h1>
      <Form onSubmit={handleSubmit}>
      <InputGroup
        onChange={(e) => {
          handleChange(e);
        }}
        style={{ width: "30rem" }}
        className="mb-3"
      >
        <FormControl
          value={state}
          placeholder="Add genre..."
          aria-label="Add genre"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button
          type="submit"
            variant="outline-secondary"
          >
            Button
          </Button>
        </InputGroup.Append>
      </InputGroup>
      </Form>


      <Card style={{ width: "30rem" }}>
        {genres != ''
        ? <ListGroup variant="flush">{listItems}</ListGroup>
        : <h1 className="text-center mt-5 mb-5">no data .... </h1>
        }
      </Card>
      </Card.Body>
      </Card>
    </div>
  );
}
