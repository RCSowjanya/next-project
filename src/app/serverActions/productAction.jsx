"use server";

import DBconnection from "../utils/config/db";

export async function ProductAction(ProductDetails) {
  await DBconnection();
  console.log("Product details:", ProductDetails);
}
