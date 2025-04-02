import React from "react";
import DBconnection from "./utils/config/db";
const Homepage = async () => {
  await DBconnection();
  return (
    <div>
      <h1>Welcome holiday resort</h1>
    </div>
  );
};

export default Homepage;
