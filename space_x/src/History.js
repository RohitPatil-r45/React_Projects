import React from "react";
import { useGlobalContext } from "./context";
const History = () => {
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
      <h1 style={{ textAlign: "center", marginTop: "1rem" }}>History</h1>
      <div className="history-container">
        {Array.isArray(data) &&
          data.map((history) => {
            const { title, event_date_utc, details, id } = history;

            return (
              <div key={id} className="history">
                <p>
                  <b>Title:</b> {title}
                </p>
                <p>
                  <b>Event Date (UTC):</b> {event_date_utc}
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

export default History;
