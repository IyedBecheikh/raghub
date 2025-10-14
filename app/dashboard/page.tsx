import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";
import { DashboardClient } from "./dashboard-client";

export default async function DashboardPage() {
  const session = await auth();

  if (!session || !session.user) {
    redirect("/");
  }

  return <DashboardClient user={session.user} />;
}
