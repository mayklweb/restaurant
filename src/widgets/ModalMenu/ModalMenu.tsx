import { getCategories } from "@/api/apiServices";
import { CategoriesType } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import React from "react";

function ModalMenu({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
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
    <div
      className={`w-full h-full fixed top-0 left-0 z-10 ${
        open ? "" : "pointer-events-none"
      }`}
    >
      <div
        className={`w-full h-full bg-black/50 ${
          open ? "visible opacity-100" : "opacity-0 invisible"
        } transition-all duration-500 ease-in-out`}
      ></div>
      <div
        className={`w-[320px] lg:w-[400px] h-full bg-[#FBFBFB] absolute top-0 right-0 ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 ease-in-out flex flex-col`}
      >
        <div className="w-full flex items-center justify-between p-5 border-y border-y-[#B2B2B2]">
          <h1 className="text-2xl text-black font-semibold tracking-tight">
            MENU
          </h1>
          <button
            onClick={() => setOpen(false)}
            className="text-xs lg:text-sm font-semibold tracking-tight cursor-pointer"
          >
            CLOSE
          </button>
        </div>
        <div className="p-5">
          {categories?.map((category) => (
            <div key={category.id} className="mb-2 border-b border-b-[#B2B2B2]">
              <h2 className="text-xl :text-2xl text-black font-semibold tracking-tight">
                {category.name}
              </h2>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default ModalMenu;
