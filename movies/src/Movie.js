import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";

const url =
  "https://www.google.com/imgres?imgurl=https%3A%2F%2Fst4.depositphotos.com%2F14953852%2F24787%2Fv%2F600%2Fdepositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg&imgrefurl=https%3A%2F%2Fdepositphotos.com%2Fvector-images%2Fno-image-available.html&tbnid=sXGK1AzI0U7nIM&vet=12ahUKEwiiyKbkr_nyAhVyFLcAHf80CQkQMygIegUIARDKAQ..i&docid=LDnLiJ-oRy4-NM&w=600&h=600&q=no%20image%20found&ved=2ahUKEwiiyKbkr_nyAhVyFLcAHf80CQkQMygIegUIARDKAQ";
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
              <img
                src={poster === "N/A" ? url : poster}
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
