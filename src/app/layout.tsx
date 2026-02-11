"use client";
import type { Metadata } from "next";
import { useState } from "react";
import { clashGrotesk, cinzelDecorative, clashDisplay } from "./_fonts";
import "./globals.css";
import { LenisWrapper } from "../components/LenisWrapper";
import Navbar from "@/components/Navbar";
import Awareness from "@/components/Awareness";

 const metadata: Metadata = {
  title: "Awoke Yodha",
  description: "Awoke Yodha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [awarenessOpen, setAwarenessOpen] = useState(false);
  return (
    <html lang="en" className={`${clashGrotesk.variable} ${clashDisplay.className} ${cinzelDecorative.variable}`}>
      <body
        className="antialiased"
      >
        <LenisWrapper>
          <Navbar onOpenAwareness={() => setAwarenessOpen(true)} />
          <Awareness open={awarenessOpen} onClose={() => setAwarenessOpen(false)} />
          {children}
        </LenisWrapper>
      </body>
    </html>
  );
}
