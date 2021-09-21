import React from "react";
import { useGlobalContext } from "./context";
import Image2 from "./Image2";
import no_image from "./no_image.jpg";
const Landpads = () => {
  const { data, loading } = useGlobalContext();
  if (loading) {
    return (
      <>
        <h1 className="loading">Loading...</h1>
      </>
    );
  }
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "1rem" }}>Landpads</h1>
      <div className="landpads-container">
        {Array.isArray(data) &&
          data.map((landpad) => {
            const {
              full_name,
              status,
              type,
              locality,
              region,
              latitude,
              longitude,
              landing_attempts,
              landing_successes,
              wikipedia,
              details,
              id,
              images,
            } = landpad || {};
            const { large: image } = images || {};

            return (
              <div key={id} className="landpad">
                <Image2
                  image={image || no_image}
                  name={full_name}
                  style={{ height: "300px", width: "300px" }}
                />
                <p>
                  <b>Name:</b> {full_name}
                </p>
                <p>
                  <b>Type:</b> {type}
                </p>
                <p>
                  <b>Status:</b> {status}
                </p>
                <p>
                  <b>Locality:</b> {locality}
                </p>
                <p>
                  <b>Region:</b> {region}
                </p>
                <p>
                  <b>Latitude:</b> {latitude} <b>Longitude:</b> {longitude}
                </p>
                <p>
                  <b>Landing Attempts:</b> {landing_attempts}
                </p>
                <p>
                  <b>Landing Successes:</b> {landing_successes}
                </p>
                <p>
                  <b>Details:</b> {details}
                </p>

                <a href={wikipedia} target="_blank" rel="noreferrer">
                  Wikipedia
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Landpads;
