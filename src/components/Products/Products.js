import { useContext } from "react";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
const Products = ({ product }) => {
  // console.log(product);
  //   get products from fakers api i
  const { id, title, image, category, price } = product;
  const { addToCartHandler } = useContext(CartContext);

  return (
    <div>
      <div className="relative  h-[300px]  mb-4 border border-[#e4e4e4] transition-all group overflow-hidden">
        <div className="w-full h-full flex justify-center items-center">
          {/* image */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition-all 300"
              src={image}
              alt="product-pic"
            />
          </div>
        </div>
        {/* buttons */}
        <div className=" flex flex-col gap-y-2 opacity-0 absolute top-6 -right-11 p-2 group-hover:opacity-100 group-hover:right-5 transition-all duration-300">
          <button>
            <div
              className=" flex justify-center items-center bg-red-500  text-white w-12 h-12"
              onClick={()=> addToCartHandler(product)}
            >
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="bg-white flex justify-center items-center w-12 h-12 text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>

      <div>
        {/* category title and price */}
        <div className="">
          <div className="text-sm capitalize text-gray-500">{category}</div>
          <Link to={`/product/${id}`}>
            <h2 className="font-semibold my-1">{title}</h2>
          </Link>
          <div className="font-semibold"> $ {price}</div>
        </div>
      </div>
    </div>
  );
};

export default Products;
