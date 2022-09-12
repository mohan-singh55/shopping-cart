import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartItemList, setCartItemList] = useState(false);
  const [isBodyOverlay, setBodyOverlay] = useState(false);

  const addToCart = (item) => {
    if (cart.filter((i) => i.id === item.id).length === 0) {
      setCart((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart((prevItems) => [...prevItems].filter((i) => i.id !== id));
  };

  const openCartList = () => {
    setCartItemList((current) => !current);
    setBodyOverlay((current) => !current);
    document.body.style.overflow = "hidden";
  };

  const closeCartList = () => {
    setCartItemList((current) => !current);
    setBodyOverlay((current) => !current);
    document.body.style.overflow = "auto";
  };

  const increaseQuantityHandle = (id) => {
    setCart((s) => {
      const newCart = s.map((i) => {
        if (i.id === id) {
          return {
            ...i,
            quantity: i.quantity + 1,
          };
        } else {
          return i;
        }
      });
      return newCart;
    });
  };

  const decreaseQuantityHandle = (id) => {
    setCart((s) => {
      const newCart = s.map((i) => {
        if (i.id === id) {
          if (i.quantity > 1) {
            return {
              ...i,
              quantity: i.quantity - 1,
            };
          } else {
            return {
              ...i,
              quantity: 1,
            };
          }
        } else {
          return i;
        }
      });
      return newCart;
    });
  };

  return (
    <AppContext.Provider
      value={{
        addToCart,
        cart,
        removeFromCart,
        openCartList,
        closeCartList,
        isCartItemList,
        isBodyOverlay,
        increaseQuantityHandle,
        decreaseQuantityHandle,
        // quantity,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// export { AppContext, AppProvider };
