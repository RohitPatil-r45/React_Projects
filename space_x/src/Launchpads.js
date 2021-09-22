import React from "react";
import { useGlobalContext } from "./context";
import Image2 from "./Image2";
import no_image from "./no_image.jpg";
const Launchpads = () => {
  const { launchpads, loading } = useGlobalContext();
  if (loading) {
    return (
      <>
        <h1 className="loading">Loading...</h1>
      </>
    );
  }
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "1rem" }}>Launchpads</h1>
      <div className="landpads-container">
        {Array.isArray(launchpads) &&
          launchpads.map((launchpad) => {
            const {
              full_name,
              status,
              timezone,
              locality,
              region,
              latitude,
              longitude,
              launch_attempts,
              launch_successes,
              details,
              id,
            } = launchpad || {};
            const { large: image } = launchpad.images || {};

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
                  <b>Timezone:</b> {timezone}
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
                  <b>Landing Attempts:</b> {launch_attempts}
                </p>
                <p>
                  <b>Landing Successes:</b> {launch_successes}
                </p>
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

export default Launchpads;
