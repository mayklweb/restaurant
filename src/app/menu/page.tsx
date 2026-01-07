"use client";
import CardList from "@/widgets/CardList/CardList";
import ModalMenu from "@/widgets/ModalMenu/ModalMenu";
import Link from "next/link";
import { useState } from "react";
import { getCategories } from "@/api/apiServices";
import { CategoriesType } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

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

  return (
    <>
      <section className="relative w-full bg-[#FBFBFB]">
        <div className="w-full">
          <div className="sticky top-0 bg-[#FBFBFB]">
            <div className="container">
              <div className="py-2.5 lg:py-5 flex items-center justify-between">
                <Link href={"/"} className="flex items-center gap-2">
                  <h1 className="text-2xl text-black font-semibold tracking-tight">
                    MIROMENU
                  </h1>
                </Link>
                <button
                  onClick={() => setOpen(true)}
                  className="text-sm lg:text-sm font-semibold tracking-tight cursor-pointer"
                >
                  MENU
                </button>
              </div>
            </div>
          </div>
          <div className="sticky top-[51px] bg-[#FBFBFB] border-y border-[#B2B2B2] overflow-x-scroll p-2">
            <div className="flex gap-5 w-max">
              {categories?.map((category) => (
                <Link
                  href={`#${category.name}`}
                  onClick={() => setOpen(false)}
                  key={category.id}
                  className="border-r-[1px] border-[#B2B2B2]"
                >
                  <h2 className="text-lg lg:text-2xl text-black font-semibold tracking-tight pr-5">
                    {category.name}
                  </h2>
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
