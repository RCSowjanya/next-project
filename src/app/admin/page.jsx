import { redirect } from "next/navigation";
import React from "react";
import { auth } from "../auth";
import Link from "next/link";
import AdminNavbar from "@/components/AdminNavbar";
import AddProducts from "@/components/AddProducts";

const AdminPage = async () => {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }
  return (
    <div>
      {session ? (
        <div>
          <AdminNavbar />
          <AddProducts />
        </div>
      ) : (
        "not Authorized"
      )}
    </div>
  );
};

export default AdminPage;
