import React from "react";
import { Link } from "react-router-dom";

const Register = ({ handleChange }) => {
  return (
    <>
      <h1>Register</h1>
      <form
        action="submit"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "33%",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        <input
          type="text"
          placeholder="username..."
          style={{
            marginTop: "10px",
            padding: "15px",
            borderRadius: "8px",
            border: "1px solid black",
            fontSize: "16px",
          }}
        />
        <input
          type="password"
          placeholder="password..."
          style={{
            marginTop: "10px",
            padding: "15px",
            borderRadius: "8px",
            border: "1px solid black",
            fontSize: "16px",
          }}
        />
        <input
          type="password"
          placeholder="confirm password..."
          style={{
            marginTop: "10px",
            padding: "15px",
            borderRadius: "8px",
            border: "1px solid black",
            fontSize: "16px",
          }}
        />

        <button
          type="submit"
          style={{
            marginTop: "10px",
            padding: "15px",
            borderRadius: "8px",
            border: "1px solid black",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "salmon",
            color: "white",
          }}
        >
          Register
        </button>
      </form>
      <Link to="/">Already a member? Login here.</Link>
    </>
  );
};

export default Register;
