import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";
import MobileNav from "./_components/MobileNav";
import Footer from "./_components/Footer";
import { Analytics } from "@vercel/analytics/react";

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
      <body>
        <Navbar />
        <MobileNav />
        <div>{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
