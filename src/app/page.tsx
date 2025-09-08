"use client";
import Image from "next/image";
import React from "react";
import { ProductsType, CategoriesType } from "../types/types";
import { useQuery } from "@tanstack/react-query";
import { getCategories, getMenu } from "../api/apiServices";

export default function Home() {


  const { data: products, isError, error, isLoading } = useQuery<ProductsType[], Error>({
    queryKey: ['products'],
    queryFn: getMenu,
  })

  const { data: categories, isError: isCategoriesError, error: categoriesError, isLoading: isCategoriesLoading } = useQuery<CategoriesType[], Error>({
    queryKey: ['categories'],
    queryFn: getCategories,
  })

  if (isLoading) return <div>Loading...</div>

  if (isError) return <div>Error: {error.message}</div>

  console.log(products);
  if (isCategoriesLoading) return <div>Loading...</div>

  if (isCategoriesError) return <div>Error: {categoriesError.message}</div>
  console.log(categories);


  return (
    <div>
      <div className="container">
        <div>
          <h1 className="text-4xl text-black font-semibold">MENU</h1>
        </div>
        <div className="my-10 flex flex-col gap-20">
          {
            categories?.map((category) => (
              <div className="" key={category.id}>
                <div className="py-4 border-y-[1px] border-[#B2B2B2] border-solid">
                  <h3 className="text-2xl text-black font-semibold">
                    {category.name}
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 mt-5">
                  {products?.filter(product => product.category_id === category.id).map((product) => (
                    <div key={product.id}>
                      {
                        product.img ? <div>
                          <Image
                            priority
                            width={520}
                            height={520}
                            src={product.img}
                            alt={product.name}
                            className="w-full h-auto object-cover"
                          />
                        </div> : ""
                      }
                      <div className="mt-5">
                        <h5 className="text-lg text-black font-semibold">{product.name}</h5>
                        <p className="mt-2.5 text-xs text-[#979797]">{product.ingredents?.map((ing) => (<span key={ing}>{ing} / </span>))}</p>
                        <p className="mt-2.5 text-xs text-[#979797]">$ {product.price}</p>
                      </div>
                    </div>
                  ))
                  }
                </div>

              </div>


            ))}
        </div>
      </div>
    </div>
  );
}
