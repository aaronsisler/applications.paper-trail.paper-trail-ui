import type { Metadata } from "next";

import { Nav } from "./common/nav";

import "./globals.css";

export const metadata: Metadata = {
  title: "Paper Trail",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="p-5">
        <Nav />
        <main className="py-5">{children}</main>
      </body>
    </html>
  );
}
