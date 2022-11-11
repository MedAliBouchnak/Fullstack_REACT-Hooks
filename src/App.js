import "./App.css";
import react, { useState } from "react";
import MoviesList from "./MoviesList";
import Search from "./Search";

function App() {
  const [keyword, setKeyword] = useState("");
  const [rateIt, setrateIt] = useState(1);
  const [movies, setMovies] = useState([
    {
      main_img:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
      second_img: "",
      title: "Avengers ENDGAME",
      duration: "1h",
      date: "",
      rate: "5",
      genre: "",
      description: "",
      
    },
    {
      main_img:
        "https://i.ibb.co/FDGqCmM/papers-co-ag74-interstellar-wide-space-film-movie-art-33-iphone6-wallpaper.jpg",
      second_img: "",
      title: "b",
      duration: "2h",
      date: "",
      rate: "4",
      genre: "",
      description: "",
    },
    {
      main_img: "",
      second_img: "EQUALIZER",
      title: "c",
      duration: "3h",
      date: "",
      rate: "3",
      genre: "",
      description: "",
      
    },
    {
      main_img: "",
      second_img: "",
      title: "The Hobbit",
      duration: "4h",
      date: "",
      rate: "4",
      genre: "",
      description: "",
      
    },
  ]);
  const search = (text) => {
    setKeyword(text);
  };
  const setRate = (rate) => {
    setrateIt(rate);
  };
  const addMovie = (movie) => {
    setMovies(movies.concat(movie));
  };
  return (
    <div className="App">
      <Search search={search} setRate={setRate} rateIt={rateIt} />
      <MoviesList
        addMovie={addMovie}
        movies={movies.filter(
          (el) =>
            el.rate >= rateIt &&
            el.title.toLowerCase().includes(keyword.toLowerCase().trim())
        )}
      />
    </div>
  );
}

export default App;
