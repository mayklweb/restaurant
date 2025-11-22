"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full p-5 bg-white">
        <div className="w-full h-full bg-[#FBFBFB] border border-[#B2B2B2]">
          <div className="w-full h-full flex flex-col gap-10 items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-semibold tracking-tight">
                MIROMENU
              </h1>
              <h1 className="text-4xl font-semibold tracking-tight">
                RESTAURANT
              </h1>
            </div>
            <div className="flex flex-col gap-5">
              <Link
                href={"/menu"}
                className="w-[240px] h-[40px] flex items-center justify-center font-semibold tracking-tight border border-[#171717] "
              >
                MENU
              </Link>
              <Link
                href={"/"}
                className="w-[240px] h-[40px] flex items-center justify-center font-semibold tracking-tight border border-[#171717]"
              >
                LOCATION
              </Link>
              <Link
                href={"/"}
                className="w-[240px] h-[40px] flex items-center justify-center font-semibold tracking-tight border border-[#171717]"
              >
                BOOK A TABLE
              </Link>
              <Link
                href={"/phone"}
                className="w-[240px] h-[40px] flex items-center justify-center font-semibold tracking-tight border border-[#171717]"
              >
                PHONE
              </Link>
              <Link
                href={"/"}
                className="w-[240px] h-[40px] flex items-center justify-center font-semibold tracking-tight border border-[#171717]"
              >
                INSTAGRAM
              </Link>
              <Link
                href={"/"}
                className="w-[240px] h-[40px] flex items-center justify-center font-semibold tracking-tight border border-[#171717]"
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
