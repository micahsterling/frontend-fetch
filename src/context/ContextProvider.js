import React, { createContext, useState } from "react";

const Context = createContext({});

export const ContextProvider = ({ children }) => {

  const [submitted, setSubmitted] = useState(false);


  return (
    <Context.Provider
      value={{
        submitted,
        setSubmitted
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
