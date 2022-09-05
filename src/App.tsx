import React from "react";
import "./App.css";
import { Form } from "./Form";

var userIsRegistered = false;

export const App = () => {
  return (
    <section className=".container">
      <Form isRegistered={userIsRegistered} />
    </section>
  );
};
