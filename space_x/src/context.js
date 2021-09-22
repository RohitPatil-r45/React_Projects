import React, { useState, useEffect, useContext } from "react";

const SPACEX_API = "https://api.spacexdata.com/v4";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("company");
  const [error, setError] = useState(false);
  const [ships, setShips] = useState([]);
  const [rockets, setRockets] = useState([]);
  const [landpads, setLandpads] = useState([]);
  const [launches, setLaunches] = useState([]);
  const [launchpads, setLaunchpads] = useState([]);

  const fetchAPI = async (url) => {
    // console.log(url);
    setLoading(true);
    setData([]);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      if (query === "ships") {
        setShips(data);
      }
      if (query === "rockets") {
        setRockets(data);
      }
      if (query === "landpads") {
        setLandpads(data);
      }
      if (query === "launchpads") {
        setLaunchpads(data);
      }
      if (query === "launches") {
        setLaunches(data);
      }
    } catch (e) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAPI(`${SPACEX_API}/${query}`);
  }, [query, error]);

  return (
    <AppContext.Provider
      value={{
        data,
        query,
        setQuery,
        loading,
        ships,
        rockets,
        launches,
        landpads,
        launchpads,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
