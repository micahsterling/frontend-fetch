import React, { useContext } from "react";
import Context from "./context/ContextProvider";
import FormSubmitted from "./components/FormSubmitted";
import Form from "./components/Form";

function App() {
  const { submitted } = useContext(Context);

  if (submitted) {
    return <FormSubmitted />;
  } else {
    return <Form />;
  }
}

export default App;
