"use client";

import { loginAction } from "@/app/serverActions/loginAction";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const loginHandler = async (e) => {
    e.preventDefault();
    const loginDetails = { email, password };
    console.log(loginDetails);
    try {
      const response = await loginAction(loginDetails);
      if (response.success) {
        router.push("/");
      } else {
        setError(response.message || "Login Failed");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="formContainer">
      <form onSubmit={loginHandler} className="formSection">
        {error && <p style={{ color: "red" }}>{error}</p>}
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default UserLogin;
