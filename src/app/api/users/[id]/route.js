//this is used for based on id of user fetch the details of particular user id,id comes from params
import DBConnection from "@/app/utils/config/db";
import UserModel from "@/app/utils/models/User";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  await DBConnection();

  const { id } = params;

  console.log("dynamic Id:", id);

  try {
    if (!id) {
      return NextResponse.json(
        { success: false, message: "no user found" },
        { status: 404 }
      );
    }

    const user = await UserModel.findById(id).populate("bookings");

    return NextResponse.json({ success: true, data: user });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false, message: "ID Is missing" });
  }
}
