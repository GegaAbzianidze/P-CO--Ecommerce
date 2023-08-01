import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import commerce from "../../../commerce";
import SkeletonProduct from "../../Skeleton/SkeletonProduct";

const ProductNew = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await commerce.products.list({
          sortBy: "name",
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
        New Arrivals
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

export default ProductNew;
