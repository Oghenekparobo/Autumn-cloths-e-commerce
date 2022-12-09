import React from "react";
import { Link } from "react-router-dom";
import woman from "../../img/woman_hero.png";

const Hero = () => {
  return (
    <section className="bg-pink-200 h-[800px] bg-hero bg-no-repeat py-24  bg-center bg-cover">
      <div className="container mx-auto flex  justify-around items-center h-full">
        {/* text */}
        <div className="flex flex-col justify-items-center">
          <div className="">
            <div className="font-semibold flex items-center uppercase">
              <div className="h-[2px] w-10 bg-red-500 mr-3"></div>new trend
            </div>
            <h1 className="text-[70px] leading-[1.1] mb-4 font-light">
              AUTUMN SALE STYLISH
              <br />
              <span className="font-semibold">WOMENS</span>
            </h1>
            <Link className="self-start uppercase font-semibold border-b-2 border-primary" to={'/'}>Discover More</Link>
          </div>
        </div>
        {/* image */}
        <div className="hidden lg:block">
          <img src={woman} alt="woman" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
