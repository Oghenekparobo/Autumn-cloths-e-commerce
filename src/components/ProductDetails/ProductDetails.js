import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { ProductContext } from "../../contexts/ProductContext";

const ProductDetails = () => {
  // get the product id from the url
  const { id } = useParams();
  console.log(id);
  // get addToCart from cart context
  const { addToCartHandler } = useContext(CartContext);

  // get producta from product cart
  const { products } = useContext(ProductContext);

  //  get the single product based on the id

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return (
      <section className="flex justify-center items-center h-screen">
        loading........
      </section>
    );
  }

  // destructure products
  const { title, image, price, description } = product;
  console.log(product);

  return (
    <section className="h-screen pt-32 pb-12  flex items-center">
      <div className="container mx-auto">
        {/* image and text wrapper */}
        <div className="flex flex-col items-center lg:flex-row ">
          {/* image */}
          <div className="image flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-[200px] lg:max-w-sm" src={image} alt="" />
          </div>
          {/* text */}
          <div className="flex flex-col">
          <div className="text flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium max-w-[450px] mx-auto">
              {title}
            </h1>
          </div>
          <div className="text flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium max-w-[450px] mx-auto">
              ${parseFloat(price).toFixed(2)}
            </h1>
          </div>
          <p className="mb-2 max-w-sm">{description}</p>
          <button
            className="bg-primary py-2 px-4 text-white"
            onClick={() => addToCartHandler(product)}
          >
            ADD TO CART
          </button>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
