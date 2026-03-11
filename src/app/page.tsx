// "use client";

// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="w-full h-full">
//       <div className="w-full h-full p-5 bg-white">
//         <div className="w-full h-full bg-[#fff]">
//           <div className="w-full h-full flex flex-col gap-10 items-center justify-center">
//             <div className="text-center">
//               <h1 className="text-4xl font-semibold tracking-tight">
//                 MIROMENU
//               </h1>
//               <h1 className="text-4xl font-semibold tracking-tight">
//                 RESTAURANT
//               </h1>
//             </div>
//             <div className="flex flex-col items-center gap-5">
//               <Link
//                 href={"/menu"}
//                 className="w-[260px] h-[50px] flex items-center justify-center font-semibold tracking-tight border border-[#171717] bg-[#FBFBFB]"
//               >
//                 MENU
//               </Link>
//               <Link
//                 href={"/"}
//                 className="w-[260px] h-[50px] flex items-center justify-center font-semibold tracking-tight border border-[#171717] bg-[#FBFBFB]"
//               >
//                 LOCATION
//               </Link>
//               <Link
//                 href={"/"}
//                 className="w-[260px] h-[50px] flex items-center justify-center font-semibold tracking-tight border border-[#171717] bg-[#FBFBFB]"
//               >
//                 BOOK A TABLE
//               </Link>
//               <Link
//                 href={"/"}
//                 className="w-[260px] h-[50px] flex items-center justify-center font-semibold tracking-tight border border-[#171717] bg-[#FBFBFB]"
//               >
//                 PHONE
//               </Link>
//               <Link
//                 href={"/"}
//                 className="w-[260px] h-[50px] flex items-center justify-center font-semibold tracking-tight border border-[#171717] bg-[#FBFBFB]"
//               >
//                 INSTAGRAM
//               </Link>
//               <Link
//                 href={"/"}
//                 className="w-[260px] h-[50px] flex items-center justify-center font-semibold tracking-tight border border-[#171717] bg-[#FBFBFB]"
//               >
//                 TELEGRAM
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { getCategories } from "@/api/apiServices";
import { CategoriesType } from "@/types/types";
import CardList from "@/widgets/CardList/CardList";
import ModalMenu from "@/widgets/ModalMenu/ModalMenu";
import { useQuery } from "@tanstack/react-query";
import { useLenis } from "lenis/react";
import Link from "next/link";
import { useState } from "react";

function Home() {
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

export default Home;
