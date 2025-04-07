import React from "react";
import DBconnection from "./utils/config/db";
import AdminPage from "./admin/page";
import { auth } from "./auth";
import { redirect } from "next/navigation";
import UserNavigation from "@/components/UserNavigation";

const Homepage = async () => {
  //for protecting home that means if login details are correct then only home page will be display for that create session
  const session = await auth();
  console.log("session:", session);
  await DBconnection();
  if (!session) {
    redirect("/login");
  }
  const userName = session.username;
  console.log("user check:", userName);

  /*display the username in navbar welcome:(username)*/

  return (
    <div>
      {/*display the username in navbar welcome:(username)*/}
      {session.role === "user" && (
        <div>
          <UserNavigation userName={userName} />
          <h1>welcome to user dashboard</h1>
        </div>
      )}
      {session.role === "admin" && <AdminPage />}
    </div>
  );
};

export default Homepage;
