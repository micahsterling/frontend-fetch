import React, { useState, useEffect, useContext } from "react";
import axios from "../axios";
import validator from "validator";
// import Context from "../context/ContextProvider";
import "../App.css";

function Form({ setSubmitted }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [emailInValid, setEmailInValid] = useState(true);
  const [emailError, setEmailError] = useState("");

  // const { setSubmitted } = useContext(Context);

  useEffect(() => {
    const validateEmail = () => {
      if (formData.email) {
        if (validator.isEmail(formData.email)) {
          setEmailError("");
          setEmailInValid(false);
        } else {
          setEmailError("Enter valid Email!");
          setEmailInValid(true);
        }
      }
    };
    validateEmail(formData.email);
  });

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

  const occupations = data.occupations;
  const state = data.states;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/form", formData)
      .then((resp) => {
        setSubmitted(true);
        console.log("submitted")
      })
      .catch((resp) => console.log("catch", resp));
    setFormData("");
  };

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
              aria-label="Name"
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
              aria-label="Email"
              onChange={handleFormChange}
              required
            />
            <span className="focus-input"></span>
            <span className="alert-validate">{emailError}</span>
          </div>
          <div className="input-wrap">
            <input
              className="form-input"
              type="password"
              name="password"
              value={formData.password}
              placeholder="Password"
              aria-label="Password"
              onChange={handleFormChange}
              required
            />
            <span className="focus-input"></span>
          </div>
          <select
            className="input-wrap"
            name="occupation"
            onChange={handleFormChange}
            aria-label="Select an Occupation"
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
            aria-label="Select the state you live in"
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
            <button className="form-btn" disabled={emailInValid}>
              <span>Send</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
