"use client";
import CardList from "@/widgets/CardList/CardList";
import ModalMenu from "@/widgets/ModalMenu/ModalMenu";
import Link from "next/link";
import { useState } from "react";
import { getCategories } from "@/api/apiServices";
import { CategoriesType } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { useLenis } from "lenis/react";

function Menu() {
  const [open, setOpen] = useState<boolean>(false);
  const {
    data: categories,
    isError: isCategoriesError,
    error: categoriesError,
    isLoading: isCategoriesLoading,
  } = useQuery<CategoriesType[], Error>({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
  const lenis = useLenis();

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    name: string
  ) => {
    e.preventDefault();

    const el = document.getElementById(name);
    if (!el) return;

    lenis?.scrollTo(el, {
      duration: 1.6,
      offset: -100,
      easing: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
    });
  };
  return (
    <>
      <section className="relative w-full bg-[#FBFBFB]">
        <div className="w-full">
          <div className="sticky top-0 bg-[#FBFBFB]">
            <div className="container">
              <div className="py-2.5 flex items-center justify-between">
                <Link href={"/"} className="flex items-center gap-2">
                  <h1 className="text-2xl text-black font-semibold tracking-tight">
                    MIROMENU
                  </h1>
                </Link>
                <button
                  onClick={() => setOpen(true)}
                  className="text-sm lg:text-sm font-semibold tracking-tight p-1 cursor-pointer"
                >
                  MENU
                </button>
              </div>
            </div>
          </div>
          <div className="sticky top-[51px] bg-[#FBFBFB] border-y border-[#B2B2B2] overflow-x-scroll ">
            <div className="flex w-max">
              {categories?.map((category) => (
                <Link
                  href={`/#${category.name}`}
                  onClick={(e) => handleScroll(e, category.name)}
                  key={category.id}
                  className="text-base lg:text-xl text-black font-semibold tracking-tight border-r-[1px] border-[#B2B2B2] px-5 py-2.5 "
                >
                  {category.name}
                </Link>
              ))}
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
