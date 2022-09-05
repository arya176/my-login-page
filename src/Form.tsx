import React from "react";

// interface IFormProps {
//   userIsRegistered : false;

// }

export const Form: React.FC = (props) => {
  return (
    <form className="formStyle">
      <input type="text" placeholder="input your email"></input>
      <input type="password" placeholder="input your password"></input>
      {/* {props.isRegistered === fales} is equal with {!props.isReistered} */}
      {/* {props.isRegistered === false ? (
        <input type="password" placeholder="confirm your password"></input>
      ) : null} is equal with {props.isRegistered === false && (
        <input type="password" placeholder="confirm your password"></input>
      )} */}
      {props.isRegistered === false && (
        <input type="password" placeholder="confirm your password"></input>
      )}
      <button type="submit">
        {props.isRegidstered ? "Login" : "Register"}
      </button>
    </form>
  );
};
