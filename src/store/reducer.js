import { ADD_TO_CART, REMOVE_FROM_CART } from "./actions";

const initialState = {
    countItem: 0,
    totalItemPrice: 0,
};

const cartReducer = (state = initialState, action) => {
    const { payload: { price } = {} } = action;

    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                countItem: state.countItem + 1,
                totalItemPrice: state.totalItemPrice + price
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                countItem: state.countItem > 0 ? state.countItem - 1 : 0,
                totalItemPrice: state.totalItemPrice > 0 ? state.totalItemPrice - price : 0
            }
        default:
            return state;
    }

}

export default cartReducer;