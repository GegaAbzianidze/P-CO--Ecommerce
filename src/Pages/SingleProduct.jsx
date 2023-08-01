import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import commerce from "../commerce";
import { useParams } from "react-router-dom";
import SkeletonSingleProduct from "../Components/Skeleton/SkeletonSingleProduct";

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const { productID } = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const retrievedProduct = await commerce.products.retrieve(productID);
        setProduct(retrievedProduct);
        console.log(retrievedProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productID]);

  const handleAddToCart = async () => {
    setLoading(true);
    if (productID) {
      try {
        await commerce.cart.add(productID, 1);
        console.log("Product added to cart");
        window.location.reload();
      } catch (error) {
        console.error("Error adding product to cart:", error);
      }
    }
  };

  if (!product)
    return (
      <div>
        <SkeletonSingleProduct />
      </div>
    );

  return (
    <div>
      {product && (
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 w-full">
            <img src={product.assets[0].url} alt={product.name} />
          </div>
          <div className="md:w-1/2">
            <div className="lg:h-screen flex flex-col m-6 lg:m-20 lg:mt-32">
              <h3 className="bg-[#b78944] rounded-md px-2 text-white font-extralight w-fit">
                {product.categories[0].name}
              </h3>
              <div className="flex justify-between mt-6 flex-col md:flex-row">
                <h1 className="text-2xl font-bold">{product.name}</h1>
                <p className="text-lg font-semibold">
                  {product.price.formatted_with_symbol}
                </p>
              </div>
              <hr className="mt-10 border-black" />
              <div className="mt-2 text-lg font-extralight">
                <p>
                  {product.description
                    .replaceAll("<p>", "")
                    .replaceAll("</p>", "")}
                </p>
              </div>
              <div className="mt-8 flex justify-between">
                <a href="#" className="flex gap-2 items-center underline">
                  <Icon icon="solar:hanger-bold-duotone" /> Size Guide
                </a>
                <a href="#" className="flex gap-2 items-center underline">
                  <Icon icon="solar:ruler-linear" /> Find your size
                </a>
              </div>
              <div className="mt-10">
                <p className="text-2xl">Size</p>
                <div className="flex gap-2 mt-3">
                  {product.variant_groups[0].options.map((size) => (
                    <button
                      key={size.id}
                      className="border border-black w-14 h-14 text-black focus:text-white focus:bg-black"
                    >
                      {size.name}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex w-full mt-4">
                <button
                  onClick={handleAddToCart}
                  className="bg-[#b78944] w-5/6 m-1 h-14 text-white"
                >
                  {isLoading ? (
                    <span className="loading loading-ring loading-lg"></span>
                  ) : (
                    "Add to Cart"
                  )}
                </button>
                <button className="bg-[#b78944] w-1/6 m-1 h-14 text-white flex justify-center items-center text-2xl">
                  <Icon icon="solar:heart-angle-broken" />
                </button>
              </div>
              <div className="mt-10 justify-center flex items-center gap-2">
                <a href="#">View full product information</a>{" "}
                <Icon icon="solar:arrow-down-broken" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
