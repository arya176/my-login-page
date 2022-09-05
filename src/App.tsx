import React from "react";
import "./App.css";
import { Form } from "./Form";

var userIsRegistered = false;

export const App = () => {
  return (
    <section className=".App">
      <Form isRegistered={userIsRegistered} />
    </section>
  );
};
