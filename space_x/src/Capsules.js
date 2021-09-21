import React from "react";
import { useGlobalContext } from "./context";
const Capsules = () => {
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
      <h1 style={{ textAlign: "center", marginTop: "1rem" }}>Capsules</h1>
      <div className="capsule-container">
        {Array.isArray(data) &&
          data.map((capsule) => {
            const {
              reuse_count,
              water_landings,
              land_landings,
              last_update,
              serial,
              status,
              type,
              id,
            } = capsule;
            return (
              <div key={id} className="capsule">
                <p>
                  <b>Type:</b> {type}
                </p>
                <p>
                  <b>Reuse Count:</b> {reuse_count}
                </p>
                <p>
                  <b>Water Landings:</b> {water_landings}
                </p>
                <p>
                  <b>Land Landings:</b> {land_landings}
                </p>
                <p>
                  <b>Serial:</b> {serial}
                </p>
                <p>
                  <b>Status:</b> {status}
                </p>
                <p>
                  <b>Last Updated:</b> {last_update}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Capsules;
