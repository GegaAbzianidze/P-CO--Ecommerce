import { useEffect, useState } from "react";
import PaymentMethodPopup from "../Components/PaymentMethodPopup";
import commerce from "../commerce";
import SkeletonCart from "../Components/Skeleton/SkeletonCart";

const Checkout = () => {
  const [items, setCart] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const fetchCart = async () => {
    try {
      const fetchedCart = await commerce.cart.contents();
      setCart(fetchedCart);
      setLoading(false);
      console.log(fetchedCart);
    } catch (error) {
      console.error("Error retrieving cart:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCart();
  }, []);

  const handleRemove = async (itemID) => {
    setLoading(true);
    try {
      await commerce.cart.remove(itemID);
      window.location.reload();
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const totalPrice = items.reduce((acc, currentItem) => {
    return acc + Number(currentItem.line_total.raw);
  }, 0);

  const skeletonArray = Array.from({ length: 2 }, (_, index) => index);

  return (
    <div className="px-12 md:px-24 lg:px-32 flex gap-6 flex-col md:flex-row">
      <div className="md:w-1/2">
        <h1 className="text-4xl">P&CO checkout</h1>
        <div className="pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-[#b78944] focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-[#b78944] focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-[#b78944] focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="country-region"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Country/region
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="country-region"
                  id="country-region"
                  autoComplete="country-region"
                  className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-[#b78944] focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Street address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-[#b78944] focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Postal code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-[#b78944] focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 bg-gray-100 px-4 h-fit">
        <div className="mt-8">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {!isLoading ? (
                items.length > 0 ? (
                  items.map((cartItems) => (
                    <li key={cartItems.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={cartItems.image.url}
                          alt={cartItems.product_name}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>{cartItems.product_name}</h3>
                            <p className="ml-4">
                              {cartItems.line_total.formatted_with_symbol}
                            </p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {/* {cartItems.selected_options[0].name} */}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">
                            Qty {cartItems.quantity}
                          </p>

                          <div className="flex">
                            <button
                              type="button"
                              className="font-medium text-[#b78944] hover:text-red-400"
                              onClick={() => handleRemove(cartItems.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <div className="flex justify-center items-center h-96">
                    <h1 className="text-2xl">Your cart is empty</h1>
                  </div>
                )
              ) : (
                <div>
                  {skeletonArray.map((item) => (
                    <div key={item}>
                      <SkeletonCart />
                    </div>
                  ))}
                </div>
              )}
            </ul>
          </div>
        </div>
        <div className=" border-gray-200 py-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <button
              onClick={() => window.my_modal_2.showModal()}
              disabled={isLoading || items.length === 0}
              className="flex items-center justify-center rounded-md border border-transparent bg-[#b78944] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#85622d] w-full"
            >
              Checkout
            </button>
          </div>
          <dialog id="my_modal_2" className="modal">
            <form method="dialog" className="modal-box">
              <PaymentMethodPopup />
            </form>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
