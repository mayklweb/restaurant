"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full p-5 bg-white">
        <div className="w-full h-full bg-[#fff]">
          <div className="w-full h-full flex flex-col gap-10 items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-semibold tracking-tight">
                MIROMENU
              </h1>
              <h1 className="text-4xl font-semibold tracking-tight">
                RESTAURANT
              </h1>
            </div>
            <div className="flex flex-col items-center gap-5">
              <Link
                href={"/menu"}
                className="w-[260px] h-[50px] flex items-center justify-center font-semibold tracking-tight border border-[#171717] bg-[#FBFBFB]"
              >
                MENU
              </Link>
              <Link
                href={"/"}
                className="w-[260px] h-[50px] flex items-center justify-center font-semibold tracking-tight border border-[#171717] bg-[#FBFBFB]"
              >
                LOCATION
              </Link>
              <Link
                href={"/"}
                className="w-[260px] h-[50px] flex items-center justify-center font-semibold tracking-tight border border-[#171717] bg-[#FBFBFB]"
              >
                BOOK A TABLE
              </Link>
              <Link
                href={"/"}
                className="w-[260px] h-[50px] flex items-center justify-center font-semibold tracking-tight border border-[#171717] bg-[#FBFBFB]"
              >
                PHONE
              </Link>
              <Link
                href={"/"}
                className="w-[260px] h-[50px] flex items-center justify-center font-semibold tracking-tight border border-[#171717] bg-[#FBFBFB]"
              >
                INSTAGRAM
              </Link>
              <Link
                href={"/"}
                className="w-[260px] h-[50px] flex items-center justify-center font-semibold tracking-tight border border-[#171717] bg-[#FBFBFB]"
              >
                TELEGRAM
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
