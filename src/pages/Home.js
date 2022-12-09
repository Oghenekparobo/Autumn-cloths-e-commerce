import { useContext } from "react";
import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";
import { ProductContext } from "../contexts/ProductContext";

const Home = () => {
  // getting products from the context api
  const { products } = useContext(ProductContext);
  // console.log(products);
  // get only men and women category from the product array
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  // console.log(filteredProducts);
  return (
    <>
    <Hero/>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 w-full max-w-sm mx-auto gap-[30px] md:max-w-none md:mx-0 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
              {filteredProducts.map((product) => (
                <Products key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
     
      </section>
    </>
  );
};

export default Home;
