import React from "react";
import { useGlobalContext } from "./context";
import Image2 from "./Image2";
import no_image from "./no_image.jpg";
const Ships = () => {
  const { ships, loading } = useGlobalContext();
  if (loading) {
    return (
      <>
        <h1 className="loading">Loading...</h1>
      </>
    );
  }
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "1rem" }}>Ships</h1>
      <div className="ships-container">
        {Array.isArray(ships) &&
          ships.map((ship) => {
            const {
              type,
              roles = {},
              mass_kg,
              year_built,
              home_port,
              image,
              name,
              active,
              id,
            } = ship;

            return (
              <div key={id} className="ships">
                <h1>{name}</h1>
                <Image2 image={image || no_image} name={name} />
                <p>
                  <b>Type:</b> {type || "N/A"} <br />
                  <b>Mass:</b> {mass_kg || "N/A"}kg <br />
                  <b>Year Built:</b> {year_built || "N/A"} <br />
                  <b>Home:</b> {home_port || "N/A"} <br />
                  <b>Active:</b> {active ? "Yes" : "No"} <br />
                </p>
                <div>
                  <b>Roles:</b>
                  <ul>
                    {" "}
                    {roles.map((role, index) => {
                      return <li key={index}>{role}</li>;
                    })}
                  </ul>{" "}
                  <br />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Ships;
