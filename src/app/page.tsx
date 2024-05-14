"use server";
import { redirect } from "next/navigation";

export default async function Home() {
  /**
   * We can use the redirect function to redirect the user to another page.
   * For example: Login, authentication...
   */
  return redirect("/dashboard");
}
