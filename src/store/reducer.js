import { ADD_TO_CART, REMOVE_FROM_CART } from "./actions";

const initialState = {
    cartItems: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const existingProduct = state.cartItems.find((item) => item.id === action.payload.id);

            return {
                ...state,
                cartItems: existingProduct
                    ? state.cartItems.map((item) =>
                        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                    )
                    : [...state.cartItems, { ...action.payload, quantity: 1 }],
            };
        }
        case REMOVE_FROM_CART: {
            return {
                ...state,
                cartItems: state.cartItems
                    .map((item) => (item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item))
                    .filter((item) => item.quantity > 0),
            };
        }
        default:
            return state;
    }
};

export default cartReducer;