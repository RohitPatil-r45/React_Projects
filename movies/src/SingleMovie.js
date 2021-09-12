import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API_ENDPOINT } from "./context";

const url =
  "https://www.google.com/search?q=no+image+found&sxsrf=AOaemvK1E8TrMiLPN01N4VQMud5WNQG3ow:1631453948093&tbm=isch&source=iu&ictx=1&fir=DlSEFt0yTc4bvM%252Cldp7V-Ybx0nO3M%252C_&vet=1&usg=AI4_-kTnXx9gWwrz6_2AToZy5bm0BRYubw&sa=X&ved=2ahUKEwiN9avIx_nyAhV0ILcAHT5bD6IQ9QF6BAgLEAE#imgrc=DlSEFt0yTc4bvM";

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
    Poster: poster,
    Released: released,
    imdbRating: rating,
    Plot: plot,
  } = movie;

  return (
    <div className="single-movie">
      <img
        scr={poster === "N/A" ? url : poster}
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
