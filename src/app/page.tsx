"use client";

import Image from "next/image";
import { useState } from "react";
import CardList from "@/widgets/CardList/CardList";
import ModalMenu from "@/widgets/ModalMenu/ModalMenu";

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <section className="w-full h-full relative">
        <div className="relative">
          <div className="w-full h-full">
            <Image
              priority
              width={1920}
              height={1080}
              alt="Hero Image"
              src="/restaurant.jpg"
              className="w-full h-full lg:h-screen object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full p-5 lg:p-10 flex items-end bg-[#FBFBFB]/90 backdrop-blur-[1000px] [mask-image:linear-gradient(to_top,black,transparent)]">
            <h1 className="text-2xl lg:text-8xl font-bold text-black">
             
              <br />
              RESTAURANT
            </h1>
          </div>
        </div>
      </section>

      <div className="relative w-full bg-[#FBFBFB] scroll">
        <div className="w-full">
          <div className="sticky top-0 bg-[#FBFBFB]">
            <div className="container">
              <div className="py-2.5 lg:py-5 flex items-center justify-between">
                <h1 className="text-2xl text-black font-semibold tracking-tight">
                  RESTAURANT
                </h1>
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
      </div>
      <ModalMenu open={open} setOpen={setOpen} />
    </div>
  );
}
