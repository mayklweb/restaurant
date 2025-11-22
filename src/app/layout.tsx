import { Mulish } from "next/font/google";
import "./globals.css";
import Providers from "../providers";

const mulish = Mulish({
  variable: "--mulish-font",
  subsets: ["latin"],
});

export const metadata = {
  title: "MENU FOR RESTAURANT",
  description: "Menu List",
};

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={` ${mulish.variable} antialiased`}>
        <Providers> 
          <header></header>
          <main className="flex flex-col flex-auto">{children}</main>
          <footer></footer>
        </Providers>
      </body>
    </html>
  );
}
