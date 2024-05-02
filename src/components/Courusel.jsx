import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const AddelementCarousel = ({ url, title }) => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilmList = async () => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apiKey=536e9803&s=${url}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch films.");
        }
        const data = await response.json();
        setFilms(data.Search || []);
      } catch (error) {
        console.error("Error fetching films:", error);
      }
    };

    fetchFilmList();
  }, [url]);

  const settings = {
    infinite: true,
    centerPadding: "30px",
    centerMode: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container mt-4">
      <Container fluid>
        <h2>{title}</h2>
        <Slider {...settings} className="ms-4 me-4">
          {films.map((film, index) => (
            <Link
              key={film.imdbID || index}
              to={`/film/details/${film.imdbID}`}
              className="m-2"
            >
              <img
                src={film.Poster}
                alt={`Movie Poster of ${film.Title}`}
                className="img-fluid"
              />
            </Link>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default AddelementCarousel;
