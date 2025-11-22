import { Mulish, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Providers from "../providers";

const instrument = Instrument_Sans({
  variable: "--instrument-sans",
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
      <body className={` ${instrument.variable} antialiased`}>
        <Providers> 
          <header></header>
          <main className="flex flex-col flex-auto">{children}</main>
          <footer></footer>
        </Providers>
      </body>
    </html>
  );
}
