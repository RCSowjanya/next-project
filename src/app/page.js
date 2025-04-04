import React from "react";
import DBconnection from "./utils/config/db";

import { auth } from "./auth";
import { redirect } from "next/navigation";
const Homepage = async () => {
  //for protecting home that means if login details are correct then only home page will be display for that create session
  const session = await auth();
  console.log("session:", session);
  await DBconnection();
  if (!session) {
    redirect("/login");
  }
  return (
    <div>
      <h1>Welcome holiday resort</h1>
    </div>
  );
};

export default Homepage;
