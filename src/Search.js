import React, { useState } from "react";
import StarRatingComponent from "react-star-rating-component";

const Search = ({ search, setRate,rateIt }) => {
  const [rating, setRating] = useState(1);
  const onStarClick = (nextValue, prevValue, name) => {
    setRate(nextValue);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Movie Name"
        onChange={(e) => search(e.target.value)}
      />
      <StarRatingComponent
        name="rate1"
        starCount={5}
        value={rateIt}
        onStarClick={onStarClick}
      />
    </div>
  );
};

export default Search;
