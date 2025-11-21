"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef } from "react";
import { ProductsType, CategoriesType } from "../types/types";
import { useQuery } from "@tanstack/react-query";
import { getCategories, getMenu } from "../api/apiServices";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const {
    data: products,
    isError,
    error,
    isLoading,
  } = useQuery<ProductsType[], Error>({
    queryKey: ["products"],
    queryFn: getMenu,
  });

  const {
    data: categories,
    isError: isCategoriesError,
    error: categoriesError,
    isLoading: isCategoriesLoading,
  } = useQuery<CategoriesType[], Error>({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  useEffect(() => {
    if (!section1Ref.current || !section2Ref.current || !containerRef.current)
      return;

    const ctx = gsap.context(() => {
      const section1 = section1Ref.current!;
      const section2 = section2Ref.current!;

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `bottom bottom`, // scroll qancha bo‘lsa pin davom etadi
        pin: section1,
        pinSpacing: false, // scroll davomida bo'sh joy qoladi
      });

      // Section 2 scroll bilan asta-sekin chiqish
      gsap.to(section2, {
        yPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `bottom bottom`,
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);
  return (
    <div ref={containerRef}>
      {/* <section ref={section1Ref} className="w-full bg-amber-100">
        <div className="p-10">
          <p ref={pRef} className="text-lg leading-relaxed text-gray-800">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
            temporibus voluptatem necessitatibus vitae quisquam dicta nemo
            commodi ut est placeat. Illum, possimus quasi vitae quibusdam
            sapiente quaerat excepturi voluptatem rem nihil quidem, voluptatum
            iste mollitia optio, quam iure corporis modi tempore. Dolorum,
            consectetur doloribus unde earum mollitia sequi asperiores
            voluptatum consequatur reiciendis nisi, rem facere delectus
            provident facilis doloremque quidem dolorem odio neque qui! Vitae
            aperiam eius doloremque earum libero ex, omnis facere eaque soluta
            minus, aspernatur sed quia, voluptates accusantium vel fuga! Ratione
            est tempora et enim iure atque laboriosam iusto quasi iste!
            Quibusdam omnis vero perspiciatis facere repellendus.
          </p>
        </div>
      </section>
      <section
        ref={section2Ref}
        className="w-full h-screen bg-blue-900"
      ></section> */}

      <section ref={section1Ref} className="w-full h-full relative">
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
          <div className=" absolute bottom-0 left-0 w-full p-5 lg:p-10 flex items-end bg-white/90 backdrop-blur-[1000px] [mask-image:linear-gradient(to_top,black,transparent)]">
            <h1 className="text-2xl lg:text-8xl font-bold text-black">
              Sofra
              <br />
              RESTAURANT
            </h1>
          </div>
        </div>
      </section>

      <section ref={section2Ref} className="bg-white">
        <div className="container">
          <div className="">
            <div className="sticky top-0 py-5 lg:py-10 bg-white flex items-center justify-between">
              <h1 className="text-4xl text-black font-semibold">MENU</h1>
              <button className="flex flex-col gap-1.5">
                <div className="w-12 h-0.5 bg-black"></div>
                <div className="w-12 h-0.5 bg-black"></div>
              </button>
            </div>
            <div className="flex flex-col gap-20">
              {categories?.map((category) => (
                <div className="" key={category.id}>
                  <div className="py-4 border-y-[1px] border-[#B2B2B2] border-solid">
                    <h3 className="text-2xl text-black font-semibold">
                      {category.name}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 mt-5">
                    {products
                      ?.filter((product) => product.category_id === category.id)
                      .map((product) => (
                        <div key={product.id}>
                          {product.img ? (
                            <div>
                              <Image
                                priority
                                width={520}
                                height={520}
                                src={product.img}
                                alt={product.name}
                                className="w-full h-auto object-cover"
                              />
                            </div>
                          ) : (
                            ""
                          )}
                          <div className="mt-5">
                            <h5 className="text-lg text-black font-semibold">
                              {product.name}
                            </h5>
                            <p className="mt-2.5 text-sm text-[#979797]">
                              {product.ingredents?.map((ing) => (
                                <span key={ing}>{ing} / </span>
                              ))}
                            </p>
                            <p className="mt-2.5 text-sm text-[#979797]">
                              $ {product.price}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
