import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "./axios";

function App() {
  const [formData, setFormData] = useState({});
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFormChange = (e) => {
    e.preventDefault();

    setFormData(
      Object.assign({}, formData, { [e.target.name]: e.target.value })
    );
  };

  useEffect(() => {
    axios
      .get("/form")
      .then((resp) => {
        setData(resp.data);
        setLoaded(true);
      })
      .catch((resp) => console.log(resp));
  }, []);

  console.log("state", formData);

  const occupations = data.occupations;
  const state = data.states;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/form", formData)
      .then((resp) => {
        setSubmitted(true);
      })
      .catch((resp) => console.log("catch", resp));
    setFormData("");
  };

  const handleClick = () => {
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="container success">
        <div className="success-wrap">
          <span className="success-title">Your Form has been Submitted</span>
          <div className="return-btn">
            <button className="form-btn" onClick={handleClick}>
              Make Another Entry
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <span className="form-title">Registration Form</span>

            <div className="input-wrap">
              <input
                className="form-input"
                type="text"
                name="name"
                value={formData.fullName}
                placeholder="Name"
                onChange={handleFormChange}
                required
              />
              <span className="focus-input"></span>
            </div>
            <div className="input-wrap">
              <input
                className="form-input"
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleFormChange}
                required
              />
            </div>
            <div className="input-wrap">
              <input
                className="form-input"
                type="password"
                name="password"
                value={formData.password}
                placeholder="Password"
                onChange={handleFormChange}
                required
              />
            </div>
            <select
              className="input-wrap"
              name="occupation"
              onChange={handleFormChange}
              required
            >
              <option value="" disabled hidden selected>
                Select an Occupation
              </option>
              {loaded &&
                occupations.map((item) => {
                  return <option key={item}> {item}</option>;
                })}
            </select>
            <select
              className="input-wrap"
              name="state"
              onChange={handleFormChange}
              required
            >
              <option value="" disabled hidden selected>
                Select the state you live in
              </option>
              {loaded &&
                state.map((item) => {
                  return <option key={item.name}>{item.name}</option>;
                })}
            </select>
            <div className="container-form-btn">
              <button className="form-btn">
                <span>Send</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
