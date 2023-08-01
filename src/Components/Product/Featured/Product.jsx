import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import commerce from "../../../commerce";
import SkeletonProduct from "../../Skeleton/SkeletonProduct";

const ProductFeatured = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      let response;
      try {
        const fetchedCategory = await commerce.categories.retrieve("Shoes", {
          type: "slug",
        });
        const categoryId = fetchedCategory.id;
        response = await commerce.products.list({
          category_id: categoryId,
        });

        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, []);

  const skeletonArray = Array.from({ length: 12 }, (_, index) => index);

  if (!products) {
    return (
      <div className="flex gap-4 py-6 overflow-x-auto overflow-y-hidden HiddenBars   md:ml-24 px-3">
         {skeletonArray.map((item) => (
          <div key={item}>
            <SkeletonProduct />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-5">
      <h1 className="text-3xl font-bold text-black  md:ml-24 px-3">
        Featured Products
      </h1>
      <div className="relative flex gap-4 py-6 overflow-x-auto overflow-y-hidden HiddenBars  md:ml-24 px-3">
        {products.map((product, index) => (
          <div key={index} className="h-[470px] w-[320px] aspect-square ">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFeatured;
