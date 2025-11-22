"use client";
import CardList from "@/widgets/CardList/CardList";
import ModalMenu from "@/widgets/ModalMenu/ModalMenu";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Menu() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <section className="relative w-full bg-[#FBFBFB]">
        <div className="w-full">
          <div className="sticky top-0 bg-[#FBFBFB]">
            <div className="container">
              <div className="py-2.5 lg:py-5 flex items-center justify-between">
                <Link href={'/'} className="flex items-center gap-2">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 20 22"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-left-icon lucide-arrow-left"
                    >
                      <path d="m12 19-7-7 7-7" />
                      <path d="M19 12H5" />
                    </svg>
                  </button>
                  <h1 className="text-2xl text-black font-semibold tracking-tight">
                    MIROMENU
                  </h1>
                </Link>
                <button
                  onClick={() => setOpen(true)}
                  className="text-xs lg:text-sm font-semibold tracking-tight cursor-pointer"
                >
                  MENU
                </button>
              </div>
            </div>
          </div>
          <div className="container">
            <CardList />
          </div>
        </div>
      </section>
      <ModalMenu open={open} setOpen={setOpen} />
    </>
  );
}

export default Menu;
