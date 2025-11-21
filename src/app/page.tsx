"use client";
import Image from "next/image";
import React from "react";
import { ProductsType, CategoriesType } from "../types/types";
import { useQuery } from "@tanstack/react-query";
import { getCategories, getMenu } from "../api/apiServices";

export default function Home() {
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

  if (isCategoriesLoading && isLoading)
    return (
      <div className="w-full h-full">
        <div className="w-full h-full grid grid-cols-3">
          <div className="w-full h-full bg-gray-300"></div>
          <div className="w-full h-full bg-gray-300"></div>
          <div className="w-full h-full bg-gray-300"></div>
        </div>
      </div>
    );

  if (isError) return <div>Error: {error.message}</div>;

  if (isCategoriesError) return <div>Error: {categoriesError.message}</div>;

  return (
    <div>
      {/* <section>
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-0">
            <Image
              src="/restaurant.jpg"
              alt="Hero Image"
              width={1920}
              height={1080}
              priority
              className="w-full h-full lg:h-screen object-cover"
            />
          </div>

        </div>
      </section> */}
      <section>
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
          <div
            className=" absolute bottom-0 left-0 w-full p-5 lg:p-10 flex items-end
      bg-white/90 backdrop-blur-[1000px]
      [mask-image:linear-gradient(to_top,black,transparent)]
    "
          >
            <h1 className="text-2xl lg:text-8xl font-bold text-black">
              Sofra
              <br />
              {/* RESTAURANT */}
            </h1>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="mt-10">
            <div>
              <h1 className="text-4xl text-black font-semibold">MENU</h1>
            </div>
            <div className="my-10 flex flex-col gap-20">
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
