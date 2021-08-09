import React, { useState, useEffect } from "react";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";
const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";
function App() {
  const [person, setPerson] = useState("null");
  const [value, setValue] = useState("Random Person");
  const [loading, setLoading] = useState("true");
  const [title, setTitle] = useState("name");

  const getUser = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    const person = data.results[0];
    const { large: image } = person.picture;
    const { email, phone } = person;
    const { age } = person.dob;
    const { first, last } = person.name;
    const { country } = person.location;
    const { password } = person.login;

    const newPerson = {
      image,
      email,
      phone,
      age,
      country,
      password,
      name: `${first} ${last}`,
    };
    setPerson(newPerson);
    setTitle("name");
    setValue(newPerson.name);
    setLoading(false);
  };

  const handleValue = (e) => {
    if (e.target.classList.contains("icon")) {
      const newValue = e.target.dataset.label;
      setTitle(newValue);
      setValue(person[newValue]);
    }
  };

  const mobileHandleValue = (e) => {
    if (e.target.classList.contains("icon")) {
      const newValue = e.target.dataset.label;
      setTitle(newValue);
      setValue(person[newValue]);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <main>
        <div className="bg"></div>
        <div className="container">
          <img
            src={(person && person.image) || defaultImage}
            alt={person.name}
            className="person-img"
          />
          <p>My {title} is </p>
          <p className="value">{value}</p>
          <div className="icon-group">
            <button
              type="button"
              className="icon"
              data-label="name"
              onMouseOver={handleValue}
            >
              <FaUser />
            </button>
            <button
              type="button"
              className="icon"
              data-label="email"
              onMouseOver={handleValue}
            >
              <FaEnvelopeOpen />
            </button>
            <button
              type="button"
              className="icon"
              data-label="age"
              onMouseOver={handleValue}
            >
              <FaCalendarTimes />
            </button>
            <button
              type="button"
              className="icon"
              data-label="country"
              onMouseOver={handleValue}
            >
              <FaMap />
            </button>
            <button
              type="button"
              className="icon"
              data-label="phone"
              onMouseOver={handleValue}
            >
              <FaPhone />
            </button>
            <button
              type="button"
              className="icon"
              data-label="password"
              onMouseOver={handleValue}
            >
              <FaLock />
            </button>
          </div>
          <button type="button" className="btn" onClick={getUser}>
            {loading ? "Loading..." : "Random User"}
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
