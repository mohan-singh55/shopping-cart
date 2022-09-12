import { createContext, useReducer, useState } from "react";
import reducer, { types } from "./reducer";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  // const [cart, setCart] = useState([]);
  const [isCartItemList, setCartItemList] = useState(false);
  const [isBodyOverlay, setBodyOverlay] = useState(false);

  const [cart, dispatch] = useReducer(reducer, []);

  const addToCart = (item) => {
    dispatch({ type: types.addToCart, payload: item });
  };

  const removeFromCart = (id) => {
    dispatch({ type: types.removeFromCart, payload: id });
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
    dispatch({ type: types.increaseQuantityHandle, payload: id });
  };

  const decreaseQuantityHandle = (id) => {
    dispatch({ type: types.decreaseQuantityHandle, payload: id });
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

export { AppContext, AppProvider };
