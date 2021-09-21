import React from "react";
import { useGlobalContext } from "./context";
const Home = () => {
  const { data, loading } = useGlobalContext();
  if (loading) {
    return (
      <>
        <h1 className="loading">Loading...</h1>
      </>
    );
  }
  return (
    <section className="home-container">
      <h1
        style={{
          textAlign: "center",
          marginTop: "1rem",
          fontFamily: "dafont",
          fontSize: "xx-large",
        }}
      >
        {data.name}
      </h1>
      <article className="company">
        <h1 className="ceo">Founder: {data.founder}</h1>
        <h1 style={{ fontSize: "25px" }}>Founded: {data.founded}</h1>
        <div>
          <h2>Employees: {data.employees}</h2>
          <h2>Valuation: {data.valuation}</h2>
          <h2>Launch Sites: {data.launch_sites}</h2>
        </div>
        <p>
          <b>Summary:</b> {data.summary}
        </p>
      </article>
    </section>
  );
};

export default Home;
