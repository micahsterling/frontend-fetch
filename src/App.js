import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "./axios";

function App() {
  const [formData, setFormData] = useState({});
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);

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

  const handleSubmit = () => { };
  return (
    <div className="container">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <span className="form-title">Registration Form</span>
          <div className="input-wrap validate-input">
            <input
              className="form-input"
              type="text"
              name="fullName"
              value={formData.fullName}
              placeholder="Full Name"
              onChange={handleFormChange}
            />
          </div>
          <div className="input-wrap validate-input">
            <input
              className="form-input"
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleFormChange}
            />
          </div>
          <div className="input-wrap form- validate-input">
            <input
              className="form-input"
              type="password"
              name="password"
              value={formData.password}
              placeholder="Password"
              onChange={handleFormChange}
            />
          </div>
          <select
            className="input-wrap validate-input"
            name="occupation"
            onChange={handleFormChange}
            required
          >
            <option value="" disabled hidden selected>
              Select an Occupation
            </option>
            {loaded &&
              occupations.map((item) => {
                return <option>{item}</option>;
              })}
          </select>
          <div className="input-wrap validate-input">
            <input
              className="form-input"
              type="text"
              name="state"
              value={formData.state}
              placeholder="State"
              onChange={handleFormChange}
            />
          </div>
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

export default App;
