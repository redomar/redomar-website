import { univers, universCondensed } from "@/styles/fonts";
import "@/styles/globals.css";



export const metadata = {
  title: "Mohamed Omar - Software Engineer",
  description: "Mohamed Omar's personal website",
  icons: [{ rel: "icon", url: "/logo.svg" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-zinc-900 text-zinc-50 ${univers.className} ${univers.variable} ${universCondensed.variable} `}>{children}</body>
    </html>
  );
}
