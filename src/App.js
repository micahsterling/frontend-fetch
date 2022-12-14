import React, { useState } from "react";
import "./App.css";
import axios from "./axios";

function App() {
  const [formData, setFormData] = useState({});

  const handleSubmit = () => { };
  return (
    <div className="container">

      <div className="wrapper">
        <form className="form" onSubmit={handleSubmit}>
          <span className="form-title">Registration Form</span>
          <div className="wrap-input validate-input">
            <input className="form-input" type="text" placeholder="Full Name" />
          </div>
          <div className="wrap-input validate-input">
            <input className="form-input" type="email" placeholder="Email" />
          </div>
          <div className="wrap-input validate-input">
            <input className="form-input" type="password" placeholder="Password" />
          </div>
          <div className="wrap-input validate-input">
            <input className="form-input" type="text" placeholder="Occupation" />
          </div>
          <div className="wrap-input validate-input">
            <input className="form-input" type="text" placeholder="State" />
          </div>
          <div className="container-form-btn">
            <button className="form-btn">
              <span>
                Send
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
