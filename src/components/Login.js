import React from "react";
import { Link } from "react-router-dom";

const Login = ({ value }) => {
  console.log(value);

  return (
    <>
      <h1>Login</h1>
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
        <button
          type="submit"
          style={{
            marginTop: "10px",
            padding: "15px",
            borderRadius: "8px",
            border: "1px solid black",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "teal",
            color: "white",
          }}
        >
          Login
        </button>
      </form>
      <Link to="/register">Not a member? Register here.</Link>
    </>
  );
};

export default Login;
