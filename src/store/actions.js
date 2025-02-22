export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToCart = (price) => ({
  type: ADD_TO_CART,
  payload: { price },
});

export const removeFromCart = (price) => ({
  type: REMOVE_FROM_CART,
  payload: { price },
});
