import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { FormProvider } from "./Components/Reducers/FormContext";

ReactDOM.render(
  <React.StrictMode>
    <FormProvider>
      <App />
    </FormProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
