import React, { useContext } from "react";
import Context from "../context/ContextProvider";
import "../App.css";

function FormSubmitted() {
  const { setSubmitted } = useContext(Context);

  return (
    <div className="container success">
      <div className="success-wrap">
        <span className="success-title">Your Form has been Submitted</span>
        <div className="return-btn">
          <button className="form-btn" onClick={() => setSubmitted(false)}>
            Make Another Entry
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormSubmitted;
