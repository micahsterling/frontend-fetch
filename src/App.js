import React, { useState } from "react";
// import Context from "./context/ContextProvider";
import FormSubmitted from "./components/FormSubmitted";
import Form from "./components/Form";

function App() {
  // const { submitted } = useContext(Context);
  const [submitted, setSubmitted] = useState(false);
  if (submitted) {
    return <FormSubmitted submitted={submitted} setSubmitted={setSubmitted} />;
  } else {
    return <Form submitted={submitted} setSubmitted={setSubmitted} />;
  }
}

export default App;
