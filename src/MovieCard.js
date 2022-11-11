import React from "react";
import StarRatingComponent from "react-star-rating-component";;

const MovieCard = ({ movie }) => {
  return (
    <div>
      <div class="container">
        <div class="cellphone-container">
          <div class="movie">
            <div class="menu">
              <i class="material-icons"></i>
            </div>
            <div class="movie-img">
              <img
                src={movie.main_img}
                style={{ height: "380px", width: "100%" }}
                alt="404"
              />
            </div>
            <div class="text-movie-cont">
              <div class="mr-grid">
                <div class="col1">
                  <h1>{movie.title}</h1>
                  <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={movie.rate}
                  />
                  <ul class="movie-gen">
                    <li>{movie.duration}</li>
                    <li>{movie.genre}</li>
                  </ul>
                </div>
              </div>
              <div class="mr-grid summary-row">
                <div class="col2">
                  <h5>SUMMARY</h5>
                </div>
                <div class="col2">
                  <ul class="movie-likes">
                    <li>
                      <i class="material-icons">&#xE813;</i>124
                    </li>
                    <li>
                      <i class="material-icons">&#xE813;</i>3
                    </li>
                  </ul>
                </div>
              </div>
              <div class="mr-grid">
                <div class="col1">
                  <p class="movie-description">{movie.description}</p>
                </div>
              </div>
              <div class="mr-grid actors-row">
                <div class="col1">
                  <p class="movie-actors">
                    Matthew McConaughey, Anne Hathaway, Jessica Chastain
                  </p>
                </div>
              </div>
              <div class="mr-grid action-row">
                <div class="col2">
                  <div class="watch-btn">
                    <h3>
                      <i class="material-icons">&#xE037;</i>WATCH TRAILER
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default MovieCard;
