import React from "react";
import Image from "./Image";
import { useGlobalContext } from "./context";
const Crew = () => {
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
      <h1 style={{ textAlign: "center", marginTop: "1rem" }}>Crew</h1>
      <div className="crew-container">
        {Array.isArray(data) &&
          data.map((crew) => {
            const { name, agency, image, wikipedia, status, id } = crew;
            return (
              <div key={id} className="crew">
                <Image image={image} name={name} />
                <p>
                  <b>Name:</b> {name}
                </p>
                <p>
                  <b>Agency:</b> {agency}
                </p>
                <a href={wikipedia} target="_blank" rel="noreferrer">
                  Wikipedia
                </a>
                <p>
                  <b>Status:</b> {status}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Crew;
