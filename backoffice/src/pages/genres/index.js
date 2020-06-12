import React, { useState, useEffect } from "react";
import {
  Card,
  ListGroup,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import genresData from "../../data/music/genres.json";
export default function Index() {
//   const genres = genresData.genres;

const [genres, setGenres] = useState(['Rock','Pop','EDM',]);

  const listItems = genres.map((value) => (
    <ListGroup.Item>{value}</ListGroup.Item>
  ));


  return (
    <div className="container">
      <h1>Genre list </h1>
      <InputGroup style={{ width: "30rem" }} className="mb-3">
        <FormControl
          placeholder="Input genre"
          aria-label="Input genre"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">Button</Button>
        </InputGroup.Append>
      </InputGroup>

      <Card style={{ width: "30rem" }}>
        <ListGroup variant="flush">{listItems}</ListGroup>
      </Card>
    </div>
  );
}
