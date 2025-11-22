import { getCategories, getMenu } from "@/api/apiServices";
import { CategoriesType, ProductsType } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import Card from "../Card/Card";

function CardList() {
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
  return (
    <>
      <div className="flex flex-col gap-20">
        {categories?.map((category) => (
          <div className="" key={category.id}>
            <div className="py-4 border-y-[1px] border-[#B2B2B2] border-solid">
              <h3 className="text-xl text-black font-semibold">
                {category.name}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 mt-5">
              {products
                ?.filter((product) => product.category_id === category.id)
                .map((product) => (
                  <Card key={product.id} product={product} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardList;
