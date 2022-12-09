import React, { useContext, useEffect, useState } from "react";
import { SideBarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";
const Header = () => {
  // header state
  const [active, setActive] = useState(false);
  // sidebar context
  const { isOpen, setIsOpen } = useContext(SideBarContext);
  // cart context
  const { itemAmount } = useContext(CartContext);
  // event listener
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setActive(true) : setActive(false);
    });
  }, []);
  return (
    <header className={`${active ? "bg-green-400  py-4 shadow-md" : "bg-red-300"} fixed w-full z-10 transition-all`}>
      <div className="container flex justify-between items-center mx-auto h-full">
        <Link to={"/"}>
          <div className="">
            <img src={logo} alt="logo" className="w-[40px]" />
          </div>
        </Link>
        {/* cart */}
    
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative "
        >
          <BsBag className="text-2xl" />
          <div className=" abosolute -right-1 -bottom-2 height-[18px] width-[18px] text-[12px] font-bold rounded-full text-white flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
