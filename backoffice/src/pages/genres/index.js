import React from 'react'
import genresData from '../../data/music/genres.json';
export default function index() {

const genres = genresData.genres

const listItems = genres.map((value) =>
  <p>{value}</p>
);

    return (
        <div className="container">
<h1>genre List </h1>
    {listItems}
        </div>
    )
}
