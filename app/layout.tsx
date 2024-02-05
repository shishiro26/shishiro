import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import MobileNav from "./_components/MobileNav";

const inter = Nunito({ weight: ["400"], subsets: ["cyrillic-ext"] });

export const metadata: Metadata = {
  title: {
    absolute: "SHISHIRO",
  },
  description:
    "Hey, I'm Shishiro. I'm an student at Indian Institute of Information and Technology,Lucknow and learning web development.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <MobileNav />
        <div>{children}</div>
      </body>
    </html>
  );
}
