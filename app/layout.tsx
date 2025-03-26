import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PreventFlash } from "@/components/prevent-flash";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Davoli & Associates",
  description: "Offering tailored legal solutions to meet your unique needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="js-loading">
      <body className={inter.className}>
        <PreventFlash />
        {children}
      </body>
    </html>
  );
}
