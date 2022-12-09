import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { IoMdClose, IoMdRemove, IoMdAdd } from "react-icons/io";
import { CartContext } from "../../contexts/CartContext";

const CartItem = ({ item }) => {
  // cart context
  const {
    removeCartHandler,
    increaseAmountHandler,
    decreaseAmountHandler,

  } = useContext(CartContext);
  // destructure items gotten from CartContext
  const { amount, id, title, image, price } = item;
  const finalPrice = parseFloat((price * amount).toFixed(2));

  return (
    <div className="flex gap-x-4 py-2">
      <div className="w-full flex items-center min-h-[150px] gap-x-4 border-b border-gray-200  font-light text-gray-500 lg:px-6">
        {/* image */}
        <div className="max-w-[80px] cursor-pointer">
          <Link to={`/product/${id}`}>
            <img src={image} alt="cart-pic" />
          </Link>
        </div>
        {/*  title */}
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <div>
              <Link
                to={`/product/${id}`}
                className="text-sm text-primary font-medium max-w-[240px] hover:underline transition-all duration-300"
              >
                {title}
              </Link>
            </div>
            {/* remove icon  */}
            <div className="text-xl cursor-pointer">
              <IoMdClose
                className="text-gray-500 hover:text-red-500 transition-all duration-300"
                onClick={() => removeCartHandler(id)}
              />
            </div>
          </div>
          <div className=" flex gap-x-2 h-[36px]">
            {/* quantity */}
            <div className="flex flex-1 items-center text-primary font-medium border h-full  max-w-[100px]">
              <div
                className="flex justify-center items-center h-full px-2 cursor-pointer"
                onClick={() => decreaseAmountHandler(id)}
              >
                {/* minus icon */}
                <IoMdRemove />
              </div>
              <div className="flex-1">
                {/* amount */}
                {amount}
              </div>
              <div className="flex justify-center items-center h-full px-2 cursor-pointer">
                {/* add icon */}
                <IoMdAdd onClick={() => increaseAmountHandler(id)} />
              </div>
            </div>
            {/* price */}
            <div className="flex justify-between items-center space-x-8">
              <div className=" ">${price}</div>
              {/* price */}
              <div className=" text-primary font-medium">${finalPrice}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
