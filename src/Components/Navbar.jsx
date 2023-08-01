import { Icon } from "@iconify/react";
import Cart from "../Pages/Cart";
import { useEffect, useState } from "react";
import commerce from "../commerce";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const navigate = useNavigate();

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  const [cart, setCart] = useState(null);
  const [cartLength, setCartLength] = useState(0);
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const fetchedCart = await commerce.cart.contents();
        setCartLength(fetchedCart.length), setCart(fetchedCart);
        console.log(fetchedCart);
      } catch (error) {
        console.error("Error retrieving cart:", error);
      }
    };

    fetchCart();
  }, []);

  return (
    <>
      {isCartOpen && <Cart onClose={handleCartToggle} items={cart} />}
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown block md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a onClick={() => window.my_modal_1.showModal()}>Men</a>
              </li>
              <li>
                <a onClick={() => window.my_modal_1.showModal()}>Women</a>
              </li>
              <li>
                <a onClick={() => window.my_modal_1.showModal()}>Goods</a>
              </li>
              <li>
                <a onClick={() => window.my_modal_1.showModal()}>Brand</a>
              </li>
              <li>
                <a onClick={() => window.my_modal_1.showModal()}>Loyalty</a>
              </li>
              <li>
                <a onClick={() => window.my_modal_1.showModal()}>Account</a>
              </li>
            </ul>
          </div>
          <a
            onClick={() => window.my_modal_1.showModal()}
            className="btn btn-ghost btn-sm rounded-btn font-extralight hidden md:flex"
          >
            Men
          </a>
          <a
            onClick={() => window.my_modal_1.showModal()}
            className="btn btn-ghost btn-sm rounded-btn font-extralight hidden md:flex"
          >
            Women
          </a>
          <a
            onClick={() => window.my_modal_1.showModal()}
            className="btn btn-ghost btn-sm rounded-btn font-extralight hidden md:flex"
          >
            Goods
          </a>
          <a
            onClick={() => window.my_modal_1.showModal()}
            className="btn btn-ghost btn-sm rounded-btn font-extralight hidden md:flex"
          >
            Brand
          </a>
          <a
            onClick={() => window.my_modal_1.showModal()}
            className="btn btn-ghost btn-sm rounded-btn font-extralight hidden md:flex"
          >
            Loyalty
          </a>
        </div>
        <div className="navbar-center">
          <a
            onClick={() => navigate("/")}
            className="btn btn-ghost normal-case text-xl"
          >
            P&CO
          </a>
        </div>
        <div className="navbar-end">
          <a
            onClick={() => window.my_modal_1.showModal()}
            className="btn btn-ghost btn-sm rounded-btn font-extralight hidden md:flex"
          >
            Search
          </a>
          <a
            onClick={() => window.my_modal_1.showModal()}
            className="btn btn-ghost btn-sm rounded-btn font-extralight hidden md:flex"
          >
            £ GBP
          </a>
          <a
            onClick={() => window.my_modal_1.showModal()}
            className="btn btn-ghost btn-sm rounded-btn font-extralight hidden md:flex"
          >
            Account
          </a>
          <button
            onClick={handleCartToggle}
            className="btn btn-ghost btn-sm rounded-btn font-extralight hidden md:flex"
            disabled={cartLength === 0}
          >
            Cart ({cartLength})
          </button>
          <button
            className="btn btn-ghost btn-circle block md:hidden"
            onClick={() => window.my_modal_1.showModal()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button
            onClick={handleCartToggle}
            className="btn btn-ghost btn-circle block md:hidden"
            disabled={cartLength === 0}
          >
            <div className="indicator">
              <Icon
                icon="solar:cart-large-2-broken"
                className="text-2xl text-black"
              />
            </div>
          </button>
        </div>
        <dialog id="my_modal_1" className="modal">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">Hello there</h3>
            <p className="py-4">
              This website is a demo and not all functionality is available.
            </p>
            <div className="modal-action">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </div>
          </form>
        </dialog>
      </div>
    </>
  );
};

export default Navbar;
