import React from "react";
import "@/app/globals.css";
import { balsamiqSans } from "./fonts";
import { SessionProvider } from "next-auth/react";
import { Session, getServerSession } from "next-auth";
import { options } from "@/lib/auth";
import Provider from "./provider";

export const metadata = {
  title: "Split",
  description: "Makes it easy to split your bills with your beloved friends",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = (await getServerSession(options)) as Session;
  return (
    <Provider session={session}>
      <html lang="en">
        <body className={`${balsamiqSans.className}`}>{children}</body>
      </html>
    </Provider>
  );
}
