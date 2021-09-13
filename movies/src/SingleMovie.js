import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API_ENDPOINT } from "./context";
import image from "./no_image.jpg";
const url = "./no_image.jpg";

const SingleMovie = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState({ show: false, msg: "" });

  const fetchMovie = async (url) => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    if (data.Response === "True") {
      setMovie(data);
      setLoading(false);
      setError({ show: false, msg: "" });
    } else {
      setError({ show: true, msg: data.Error });
    }
  };

  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}&i=${id}`);
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error.show) {
    return (
      <>
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          Back to Movies
        </Link>
      </>
    );
  }

  const {
    Title: title,
    Released: released,
    imdbRating: rating,
    Poster: poster,
    Plot: plot,
  } = movie;

  return (
    <div className="single-movie">
      <img
        scr={poster === "N/A" ? image : poster}
        alt={title}
        style={{ width: "200px", height: "300px" }}
      />

      <h1>Title: {title}</h1>
      <p>Released: {released}</p>
      <h3>Rating: {rating}⭐</h3>
      <p>{plot}</p>
      <Link to="/" className="btn">
        Back to Movies
      </Link>
    </div>
  );
};

export default SingleMovie;
