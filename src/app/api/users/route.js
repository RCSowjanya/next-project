import DBconnection from "@/app/utils/config/db";
import UserModel from "@/app/utils/models/User";
import { NextResponse } from "next/server";

export async function GET() {
  //Get all the user details from db
  await DBconnection();
  try {
    //for security purpose admin record is not visible  for that do write like this and password also not visible
    const users = await UserModel.find(
      { role: { $ne: "admin" } },
      { password: 0 }
    );
    if (!users) {
      return NextResponse.json({ success: false });
    }
    return NextResponse.json({ success: true, users }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false, message: "failed" });
  }
}
