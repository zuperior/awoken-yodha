import type { Metadata } from "next";
import Link from "next/link";
import { clashGrotesk, cinzelDecorative, clashDisplay } from "./_fonts";
import "./globals.css";
import { LenisWrapper } from "../components/LenisWrapper";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Awoke Yodha",
  description: "Awoke Yodha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${clashGrotesk.variable} ${clashDisplay.className} ${cinzelDecorative.variable}`}>
      <body
        className="antialiased"
      >
        <LenisWrapper>
          <Navbar />
          {children}
        </LenisWrapper>
      </body>
    </html>
  );
}
