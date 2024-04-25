import { univers, universCondensed } from "@/styles/fonts";
import "@/styles/globals.css";

import { Inter } from "next/font/google";


export const metadata = {
  title: "Mohamed Omar - Software Engineer",
  description: "Mohamed Omar's personal website",
  // icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${univers.className} ${univers.variable} ${universCondensed.variable}`}>{children}</body>
    </html>
  );
}
