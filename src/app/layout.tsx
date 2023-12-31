import type { Metadata } from "next";
import { fontMulish } from "./fonts";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${fontMulish.variable} font-sans`}>{children}</body>
    </html>
  );
}
