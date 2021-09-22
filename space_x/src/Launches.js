import React from "react";
import { useGlobalContext } from "./context";
import Image2 from "./Image2";
import no_image from "./no_image.jpg";
const Launches = () => {
  const { launches, loading } = useGlobalContext();
  if (loading) {
    return (
      <>
        <h1 className="loading">Loading...</h1>
      </>
    );
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "1rem" }}>Launches</h1>
      <div className="launches-container">
        {Array.isArray(launches) &&
          launches.map((launch) => {
            const {
              fairing,
              links,
              date_utc,
              success,
              flight_number,
              name,
              details,
              id,
            } = launch || {};
            const { large: image, small: image1 } = links.patch
              ? links.patch
              : {};
            const { wikipedia, youtube_id } = links || {};
            const { reused, recovery_attempt, recovered } = fairing || {};

            const url = `https://www.youtube-nocookie.com/embed/${youtube_id}`;
            return (
              <div key={id} className="launch">
                <h1>{name}</h1>
                <div>
                  {youtube_id === null ? (
                    <h1>No Video Available</h1>
                  ) : (
                    <iframe
                      width="560"
                      height="315"
                      src={url}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
                <Image2 image={image || image1 || no_image} name={name} />
                <p>
                  <b>Flight Number:</b> {flight_number}
                </p>
                <p>
                  <b>Timezone:</b> {date_utc}
                </p>
                <p>
                  <b>Success:</b> {success ? "Yes" : "No"}
                </p>
                <p>
                  <b>Reused:</b> {reused ? "Yes" : "No"}
                </p>
                <p>
                  <b>Recovery Attempts:</b> {recovery_attempt ? "Yes" : "No"}
                </p>
                <p>
                  <b>Recovered:</b> {recovered ? "Yes" : "No"}
                </p>
                <a href={wikipedia} target="_blank" rel="noreferrer">
                  Wikipedia
                </a>
                <p>
                  <b>Details:</b> {details}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Launches;
