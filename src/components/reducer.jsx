const reducer = (state, action) => {
    
  switch (action.type) {
    case types.addToCart:
      if (state.some((i) => i.id != action.payload.id) || (state.length === 0)) {
        return [...state, { ...action.payload, quantity: 1 }];
      } else {
        return state;
      }

    case types.removeFromCart:
      return [...state].filter((i) => i.id !== action.payload);

    case types.increaseQuantityHandle:
      return state.map((i) => {
        if (i.id === action.payload) {
          return {
            ...i,
            quantity: i.quantity + 1,
          };
        } else {
          return i;
        }
      });

    case types.decreaseQuantityHandle:
      return state.map((i) => {
        if (i.id === action.payload) {
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

    default:
      return state;
  }
};

export const types = {
  addToCart: "addToCart",
  removeFromCart: "removeFromCart",
  increaseQuantityHandle: "increaseQuantityHandle",
  decreaseQuantityHandle: "decreaseQuantityHandle",
};

export default reducer;
