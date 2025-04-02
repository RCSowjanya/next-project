"use client";
import React, { useState } from "react";

const RegisterForm = () => {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //function for collect the values
  const registerHandler = async (e) => {
    //on submit page will not refresh----*/
    e.preventDefault();
    const userRegistrationDetails = { userName, email, password };
    console.log(userRegistrationDetails);
  };

  return (
    <div className="formContainer">
      <form onSubmit={registerHandler} className="formSection">
        <h3>Username</h3>
        <input
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <h3>Email</h3>
        <input
          type="text"
          name="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <h3>Password</h3>
        <input
          type="text"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
