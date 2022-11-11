import React, { useState } from "react";
import StarRatingComponent from "react-star-rating-component";
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";

const Search = ({ search, setRate, rateIt }) => {
  const [rating, setRating] = useState(1);
  const onStarClick = (nextValue, prevValue, name) => {
    setRate(nextValue);
  };

  return (
    <div >
      <Form.Control
                type="search"
                placeholder="Movie Name"
                className="me-2"
                aria-label="Search"
                onChange={(e) => search(e.target.value)}/>
      {/* <input
        type="text"
        placeholder="Movie Name"
        onChange={(e) => search(e.target.value)}
      /> */}
      <div style={{ }}>
      <StarRatingComponent
        name="rate1"
        starCount={5}
        value={rateIt}
        onStarClick={onStarClick}
      /></div>
    </div>
  );
};

export default Search;
