import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";
import image from "./no_image.jpg";
import Image from "./Image";

const Movie = () => {
  const { loading, movies } = useGlobalContext();

  if (loading === true) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <section>
      {movies.map((movie) => {
        const { imdbID: id, Title: title, Year: year, Poster: poster } = movie;
        return (
          <Link to={`/movies/${id}`} key={id} className="movie">
            <article>
              {/* <Image poster={poster} title={title} /> */}
              <img
                src={poster === "N/A" ? image : poster}
                alt={title}
                className="img"
              />
              <div className="info">
                <h2>{title}</h2>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movie;
