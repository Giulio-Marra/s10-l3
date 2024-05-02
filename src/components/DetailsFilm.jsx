import { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import MyNavbar from "./MyNavbar";
import MyFooter from "./MyFooter";

const DetailsFilm = () => {
  const [film, setFilm] = useState([]);
  const { dynamicId } = useParams();

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apiKey=536e9803&i=${dynamicId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch film.");
        }
        const data = await response.json();
        console.log("film", data);
        setFilm(data);
      } catch (error) {
        console.error("Error fetching films:", error);
      }
    };
    if (dynamicId) {
      fetchFilm();
    }
  }, [dynamicId]);
  return (
    <>
      <MyNavbar />
      <Container className="mt-5 mb-5 ">
        <Row className="mt-3">
          <Col xs={12} md={4}>
            <Image
              src={film.Poster}
              alt={film.Title}
              className="img-fluid border"
            />
          </Col>
          <Col xs={12} md={8}>
            <h1>{film.Title}</h1>
            <p>
              <strong>Year Released:</strong> {film.Year}
            </p>
            <p>
              <strong>Runtime:</strong> {film.Runtime}
            </p>
            <p>
              <strong>Genre:</strong> {film.Genre}
            </p>
            <p>
              <strong>Actors:</strong> {film.Actors}
            </p>
            <h5>Plot:</h5>
            <p>{film.Plot}</p>
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </>
  );
};

export default DetailsFilm;
