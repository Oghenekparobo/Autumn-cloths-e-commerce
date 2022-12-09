import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

import { useContext } from "react";
import { SideBarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";

const Sidebar = () => {
  // handle sidebar open and close context
  const { isOpen, handleClose } = useContext(SideBarContext);
  // handle cart context
  // const { cart } = useContext(CartContext);
  const { cart, clearCartHandler, totalPrice, itemAmount } = useContext(
    CartContext
  );
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full h-full fixed top-0 bg-white shadow-2xl transition-all duration-300 px-4 z-20 md:w-[35vw] xl:max-w-[30vw] lg:px-[35px]`}
    >
      <div className="flex justify-between items-center py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          shopping bag ({itemAmount})
        </div>
        {/* icon */}
        <div
          className="flex justify-center items-center cursor-pointer h-8 w-8"
          onClick={handleClose}
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      {/* cart items */}
      <div className="overflow-y-auto flex flex-col gap-y-2 overflow-x-hidden border-b  h-[520px] lg:h-[640px]">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      {/* sidebar bottom */}
      <div className="flex flex-col gap-y-3 py-4 mt-3">
        <div className="flex justify-between items-center w-full">
          {/* total */}
          <div className="uppercase font-semibold">
            <span>Total:</span>${parseFloat(totalPrice).toFixed(2)}
          </div>
          {/* clear cart */}
          <div className="">
            <div
              onClick={clearCartHandler}
              className="flex justify-center items-center py-4 bg-red-500 text-white w-12 h-12  text-xl cursor-pointer"
            >
              <FiTrash2 />
            </div>
         
          </div>
          <div className="">
          <Link className="bg-gray-200 flex justify-center items-center p-4 text-primary w-full">
            View Cart
          </Link>
          <Link className="bg-primary flex justify-center items-center p-4 text-white w-full ">
            Checkout
          </Link>
        </div>
        </div>
     
      </div>
    </div>
  );
};

export default Sidebar;
