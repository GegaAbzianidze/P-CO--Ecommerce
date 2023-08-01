import PropTypes from "prop-types";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  // const [isHovered, setIsHovered] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };
  const navigate = useNavigate();

  return (
    <div
      className="h-full w-full cursor-pointer -mt-6 py-4 "
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      onClick={() => navigate(`/item/${product.id}`)}
    >
      <div className="relative">
        <h3 className="absolute top-2 left-2 bg-[#b78944] rounded-md px-2 text-white font-extralight">
          Best Seller
        </h3>
        <img
          src={product.image.url}
          className="w-full h-full object-cover"
          alt={product.name}
        />
      </div>
      <div className="product-details">
        <h3 className="mt-2 font-bold text-black">{product.name}</h3>
        <p>{product.price.formatted_with_symbol}</p>
      </div>
    </div>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
