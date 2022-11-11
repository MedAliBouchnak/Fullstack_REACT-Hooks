import "./App.css";
import react, { useState } from "react";
import MoviesList from "./MoviesList";
import Search from "./Search";
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavDropdown from "react-bootstrap/NavDropdown";

function App() {
  const [keyword, setKeyword] = useState("");
  const [rateIt, setrateIt] = useState(1);
  const [movies, setMovies] = useState([
    {
      main_img:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
      second_img: "",
      title: "Avengers ENDGAME",
      duration: "3h 2m",
      date: "26/04/2019",
      rate: "5",
      genre: "Action,Super Hero,Adventure",
      description:
        "After half of all life is snapped away by Thanos, the Avengers are left scattered and divided. Now with a way to reverse the damage, the Avengers and their allies must assemble once more and learn to put differences aside in order to work together and set things right.",
    },
    {
      main_img: "https://flxt.tmsimg.com/assets/p8028628_v_v8_aa.jpg",
      second_img: "",
      title: "Birdemic: Shock and Terror",
      duration: "1h 30m",
      date: "27/02/2010",
      rate: "1",
      genre: "Horror,Action,Romance",
      description:
        "A horde of mutated birds descends upon the quiet town of Half Moon Bay, California. As the death toll rises, two citizens manage to fight back, but will they survive Birdemic? A horde of mutated birds descends upon the quiet town of Half Moon Bay, California.",
    },
    {
      main_img:
        "http://static3.businessinsider.com/image/509977c969beddec46000011-658-960/the-hobbit.jpg",
      second_img: "",
      title: "The Hobbit",
      duration: "2h 49m",
      date: "28/11/2012",
      rate: "4",
      genre: "Novel,Fantasy Fiction,Epic",
      description: "Hobbits, a race of small humanlike creatures, characteristically value peace, simplicity, and cozy homes yet are capable of incredible feats of courage and resourcefulness.",
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
      <Navbar bg="white" expand="lg">
        <Container fluid style={{ width: "" }}>
          <Navbar.Brand href="#">MovieCard</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>

              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Search search={search} setRate={setRate} rateIt={rateIt} />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Button variant="outline-success">Search</Button> */}

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
