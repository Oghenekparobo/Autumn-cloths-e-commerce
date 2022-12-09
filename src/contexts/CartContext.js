import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // cart or item state
  const [cart, setCart] = useState([]);

  // cart or the item amount state, the number of items on cart
  const [itemAmount, setItemAmount] = useState(0);

  // total price state
  const [totalPrice, setTotalPrice] = useState(0);

  // update item amount
  useEffect(() => {
    const total = cart.reduce((acc, no) => {
      return acc + no.price * no.amount;
    }, 0);

    setTotalPrice(total);

 
    if (cart) {
      const amount = cart.reduce((acc, no) => {
        return acc + no.amount;
      }, 0);

      setItemAmount(amount);
    }
  }, [cart]);

  const addToCartHandler = (product) => {
    const newItem = { ...product, amount: 1 };
    // console.log(`${product.title} has been added`);
    // check if item is already in cart
    const cartItem = cart.find((item) => {
      return item.id === product.id;
    });

    // if item already exists
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            amount: cartItem.amount + 1,
          };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  // remove item from cart
  const removeCartHandler = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  // clear cart
  const clearCartHandler = () => {
    setCart([]);
  };

  // increase amount of items when you click plus button
  const increaseAmountHandler = (id) => {
    const item = cart.find((item) => item.id === id);
    addToCartHandler(item);

    // console.log(item);
  };

  const decreaseAmountHandler = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount: cartItem.amount - 1,
          };
        } else {
          return item;
        }
      });

      setCart(newCart);
    }

    if (cartItem.amount < 2) {
      removeCartHandler(id);
    }

    // console.log(item);
  };

  console.log(cart);
  return (
    <CartContext.Provider
      value={{
        addToCartHandler,
        cart,
        removeCartHandler,
        clearCartHandler,
        increaseAmountHandler,
        decreaseAmountHandler,
        itemAmount,
        setItemAmount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
